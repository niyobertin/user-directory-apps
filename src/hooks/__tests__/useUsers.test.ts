import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useUsers } from "../useUsers";
import { fetchUsers } from "../../lib/api";
import { mockUsers } from "../../constants/mockData";

vi.mock("../../lib/api", () => ({
    fetchUsers: vi.fn(),
}));

describe("useUsers hook", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should start in loading state and fetch users successfully", async () => {
        vi.mocked(fetchUsers).mockResolvedValueOnce(mockUsers);

        const { result } = renderHook(() => useUsers());

        expect(result.current.status).toBe("loading");
        expect(result.current.users).toEqual([]);
        expect(result.current.errorMessage).toBe("");

        await waitFor(() => {
            expect(result.current.status).toBe("success");
        });

        expect(result.current.users).toEqual(mockUsers);
        expect(vi.mocked(fetchUsers)).toHaveBeenCalledTimes(1);
    });

    it("should handle error state if fetch fails", async () => {
        vi.mocked(fetchUsers).mockRejectedValueOnce(new Error("Network Error"));

        const { result } = renderHook(() => useUsers());

        expect(result.current.status).toBe("loading");

        await waitFor(() => {
            expect(result.current.status).toBe("error");
        });

        expect(result.current.errorMessage).toBe("Network Error");
        expect(result.current.users).toEqual([]);
    });

    it("should provide a refetch function that triggers fetching again", async () => {
        vi.mocked(fetchUsers)
            .mockRejectedValueOnce(new Error("Network Error"))
            .mockResolvedValueOnce(mockUsers);

        const { result } = renderHook(() => useUsers());

        await waitFor(() => {
            expect(result.current.status).toBe("error");
        });

        expect(vi.mocked(fetchUsers)).toHaveBeenCalledTimes(1);

        result.current.refetch();

        await waitFor(() => {
            expect(result.current.status).toBe("success");
        });

        expect(result.current.users).toEqual(mockUsers);
        expect(vi.mocked(fetchUsers)).toHaveBeenCalledTimes(2);
    });
});
