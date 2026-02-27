const UserSkeleton = () => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-md p-4 border border-gray-200">
            {/* Avatar + Name */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
                </div>
            </div>

            <hr className="mb-4 border-gray-200" />

            {/* Email row */}
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gray-300 animate-pulse shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-1/4" />
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-3/5" />
                </div>
            </div>

            {/* City row */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-300 animate-pulse shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-1/4" />
                    <div className="h-3 bg-gray-300 rounded animate-pulse w-2/5" />
                </div>
            </div>
        </div>
    );
};

export default UserSkeleton;
