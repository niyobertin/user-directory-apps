import type { SortMode } from "../lib/filterUsers";

type Props = {
    value: SortMode;
    onChange: (value: SortMode) => void;
};

const SortToggle = ({ value, onChange }: Props) => {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Sort</span>
            <div className="inline-flex overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <button
                    type="button"
                    onClick={() => onChange("asc")}
                    className={[
                        "px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-200",
                        value === "asc" ? "bg-indigo-50 text-indigo-800" : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                >
                    A–Z
                </button>
                <button
                    type="button"
                    onClick={() => onChange("desc")}
                    className={[
                        "px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-200",
                        value === "desc" ? "bg-indigo-50 text-indigo-800" : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                >
                    Z–A
                </button>
            </div>
        </div>
    );
};

export default SortToggle;