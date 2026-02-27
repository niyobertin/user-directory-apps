import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
    it("calls onChange when typing", async () => {
        const onChange = vi.fn();

        const Wrapper = () => {
            const [value, setValue] = useState("");
            return (
                <SearchBar
                    value={value}
                    onChange={(v) => {
                        setValue(v);
                        onChange(v);
                    }}
                />
            );
        };

        render(<Wrapper />);

        const input = screen.getByLabelText(/search by name/i);
        await userEvent.type(input, "Ann");
        expect(onChange).toHaveBeenCalled();
        expect(onChange).toHaveBeenLastCalledWith("Ann");
    });
});