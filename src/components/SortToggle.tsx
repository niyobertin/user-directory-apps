import { ArrowUpAZ, ArrowDownZA } from "lucide-react";
import type { SortMode } from "../lib/filterUsers";

type Props = {
    value: SortMode;
    onChange: (value: SortMode) => void;
};

const SortToggle = ({ value, onChange }: Props) => {
    return (
        <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700">Sort Order</span>
            <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
                <button
                    type="button"
                    onClick={() => onChange("asc")}
                    className={[
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all focus:outline-none",
                        value === "asc"
                            ? "bg-indigo-100 text-indigo-800 shadow-sm ring-1 ring-indigo-200/50"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50",
                    ].join(" ")}
                >
                    <ArrowUpAZ className="h-4 w-4" />
                    <span>A–Z</span>
                </button>
                <button
                    type="button"
                    onClick={() => onChange("desc")}
                    className={[
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all focus:outline-none",
                        value === "desc"
                            ? "bg-indigo-100 text-indigo-800 shadow-sm ring-1 ring-indigo-200/50"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50",
                    ].join(" ")}
                >
                    <ArrowDownZA className="h-4 w-4" />
                    <span>Z–A</span>
                </button>
            </div>
        </div>
    );
};

export default SortToggle;