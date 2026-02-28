import { User, Mail, MapPin } from "lucide-react";
import type { User as UserType } from "../types/user";

type Props = {
  user: UserType;
  onSelect: (id: number) => void;
  selected?: boolean;
};

const UserCard = ({ user, onSelect, selected }: Props) => {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(user.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(user.id);
        }
      }}
      aria-pressed={selected}
      className={[
        "group block w-full rounded-2xl border bg-white p-4 text-left shadow-md transition-all",
        "cursor-pointer hover:-translate-y-1 hover:shadow-lg",
        "focus:ring-2 focus:ring-indigo-200 focus:outline-none",
        selected ? "border-indigo-300 ring-2 ring-indigo-100" : "border-gray-100",
      ].join(" ")}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
          <User className="h-5 w-5 text-indigo-500" />
        </div>
        <div className="overflow-hidden text-left">
          <p className="truncate font-semibold text-gray-800">{user.name}</p>
        </div>
      </div>

      <hr className="mb-4 border-gray-100" />

      <div className="mb-3 flex items-center gap-3 text-left">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
          <Mail className="h-4 w-4 text-indigo-500" />
        </div>
        <div className="overflow-hidden">
          <p className="text-xs tracking-wide text-gray-400">Email</p>
          <p className="truncate text-sm text-gray-700">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-left">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
          <MapPin className="h-4 w-4 text-indigo-500" />
        </div>
        <div className="overflow-hidden">
          <p className="text-xs tracking-wide text-gray-400">City</p>
          <p className="truncate text-sm text-gray-700">{user.address.city}</p>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
