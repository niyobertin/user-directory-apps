import type { User } from "../types/user";
import UserCard from "./UserCard";
import UserSkeleton from "./UserSkeleton";

type Props = {
    users: User[];
    onSelect: (id: number) => void;
    selectedId?: number;
    loading?: boolean;
};

const UserList = ({ users, onSelect, selectedId, loading }: Props) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <UserSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((u) => (
                <UserCard key={u.id} user={u} onSelect={onSelect} selected={u.id === selectedId} />
            ))}
        </div>
    );
};

export default UserList;