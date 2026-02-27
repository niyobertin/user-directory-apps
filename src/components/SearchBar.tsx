import { Search, X } from "lucide-react";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className="w-full sm:max-w-lg">
            <label className="block text-sm font-medium text-slate-700" htmlFor="search">
                Search by name
            </label>
            <div className="relative mt-1.5 flex items-center">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                    id="search"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="e.g. Leanne Graham"
                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/50"
                />
                {value && (
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;