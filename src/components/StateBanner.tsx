type Status = "idle" | "loading" | "success" | "error";

type Props = {
    status: Status;
    errorMessage?: string;
    onRetry?: () => void;
    empty?: boolean;
    emptyTitle?: string;
    emptyDescription?: string;
};



const StateBanner = ({
    status,
    errorMessage,
    onRetry,
    empty,
    emptyTitle,
    emptyDescription,
}: Props) => {
    if (status === "loading") {
        return null;
    }

    if (status === "error") {
        return (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <div className="text-sm font-semibold text-rose-800">Could not load users</div>
                <p className="mt-1 text-sm text-rose-700">{errorMessage || "Please try again."}</p>
                {onRetry && (
                    <button
                        type="button"
                        onClick={onRetry}
                        className="mt-3 rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    >
                        Retry
                    </button>
                )}
            </div>
        );
    }

    if (empty) {
        return (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{emptyTitle || "Nothing here"}</div>
                <p className="mt-1 text-sm text-slate-600">{emptyDescription}</p>
            </div>
        );
    }

    return null;
};

export default StateBanner;