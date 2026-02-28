import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import App from "../App";
import { fetchUsers } from "../../lib/api";
import { mockUsers } from "../../constants/mockData";

vi.mock("../../lib/api", () => ({
  fetchUsers: vi.fn(),
}));

const LocationDisplay = () => {
  const location = useLocation();
  return (
    <div data-testid="location-display">
      {location.pathname}
      {location.search}
    </div>
  );
};

describe("App Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch users and render them, then update URL and filter when searching", async () => {
    vi.mocked(fetchUsers).mockResolvedValueOnce(mockUsers);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
      expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("e.g. Leanne Graham");

    await userEvent.type(searchInput, "Ervin");

    await waitFor(() => {
      expect(screen.queryByText("Leanne Graham")).not.toBeInTheDocument();
    });
    expect(screen.getByText("Ervin Howell")).toBeInTheDocument();

    expect(screen.getByTestId("location-display")).toHaveTextContent("/?q=Ervin");
  });

  it("should update URL when a user is clicked and open modal", async () => {
    vi.mocked(fetchUsers).mockResolvedValueOnce(mockUsers);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    });

    const userCard = screen.getByText("Leanne Graham").closest("article");
    expect(userCard).not.toBeNull();

    await userEvent.click(userCard!);

    expect(screen.getByText("Full profile details")).toBeInTheDocument();

    expect(screen.getByTestId("location-display")).toHaveTextContent("/users/1");

    const closeBtn = screen.getByLabelText("Close overlay");
    await userEvent.click(closeBtn);

    expect(screen.queryByText("Full profile details")).not.toBeInTheDocument();
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});
