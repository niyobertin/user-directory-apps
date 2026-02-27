type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className="w-full sm:max-w-sm">
            <label className="block text-sm font-medium text-slate-700" htmlFor="search">
                Search by name
            </label>
            <div className="mt-1">
                <input
                    id="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="e.g. Leanne Graham"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
                />
            </div>
        </div>
    );
};

export default SearchBar;