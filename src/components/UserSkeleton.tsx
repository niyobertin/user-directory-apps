const UserSkeleton = () => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-gray-300" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300" />
        </div>
      </div>

      <hr className="mb-4 border-gray-200" />

      <div className="mb-3 flex items-center gap-3">
        <div className="h-8 w-8 shrink-0 animate-pulse rounded-lg bg-gray-300" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-2 w-1/4 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-3/5 animate-pulse rounded bg-gray-300" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-8 w-8 shrink-0 animate-pulse rounded-lg bg-gray-300" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-2 w-1/4 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-2/5 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
