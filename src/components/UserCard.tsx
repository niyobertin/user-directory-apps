import { User, Mail, MapPin } from "lucide-react";
import type { User as UserType } from "../types/user";

type Props = {
    user: UserType;
    onSelect: (id: number) => void;
    selected?: boolean;
};

const UserCard = ({ user, onSelect, selected }: Props) => {
    return (
        <button
            type="button"
            onClick={() => onSelect(user.id)}
            className={[
                "group w-full rounded-2xl border bg-white p-4 shadow-md transition-all",
                "hover:-translate-y-1 hover:shadow-lg cursor-pointer",
                "focus:outline-none focus:ring-2 focus:ring-indigo-200",
                selected ? "border-indigo-300 ring-2 ring-indigo-100" : "border-gray-100",
            ].join(" ")}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="text-left overflow-hidden">
                    <p className="font-semibold text-gray-800 truncate">{user.name}</p>
                </div>
            </div>

            <hr className="mb-4 border-gray-100" />

            <div className="flex items-center gap-3 mb-3 text-left">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="overflow-hidden">
                    <p className="text-xs text-gray-400  tracking-wide">Email</p>
                    <p className="text-sm text-gray-700 truncate">{user.email}</p>
                </div>
            </div>

            <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="overflow-hidden">
                    <p className="text-xs text-gray-400  tracking-wide">City</p>
                    <p className="text-sm text-gray-700 truncate">{user.address.city}</p>
                </div>
            </div>
        </button>
    );
};

export default UserCard;