import { useEffect, useRef } from "react";
import type { User } from "../types/user";
import { X } from "lucide-react";

type Props = {
    user?: User;
    open: boolean;
    onClose: () => void;
};

const Field = ({ label, value }: { label: string; value: string }) => {
    return (
        <div>
            <div className="text-normal tracking-wide text-slate-500">{label}</div>
            <div className="text-sm text-slate-900">{value}</div>
        </div>
    );
};

const UserDetailsModal = ({ user, open, onClose }: Props) => {
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeBtnRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-20 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
            aria-label="User details"
        >
            <button
                type="button"
                className="absolute inset-0 bg-slate-900/40"
                onClick={onClose}
                aria-label="Close overlay"
            />

            <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl">
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 p-4">
                    <div>
                        <h2 className="text-medium font-bold text-slate-900">
                            {user ? user.name : "User not found"}
                        </h2>
                        <p className="text-sm text-slate-500">Full profile details</p>
                    </div>

                    <button
                        ref={closeBtnRef}
                        type="button"
                        onClick={onClose}
                        className="rounded-full bg-white p-2 cursor-pointer text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="p-4">
                    {!user ? (
                        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800">
                            This user does not exist in the current list.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <div className="grid gap-x-2 gap-y-3 sm:grid-cols-2">
                                <Field label="Email" value={user.email} />
                                <Field label="Phone" value={user.phone} />
                                <Field label="Company" value={user.company.name} />
                            </div>

                            <div className="relative py-1">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-slate-100" />
                                </div>
                                <div className="relative flex justify-start">
                                    <span className="bg-white pr-2 text-sm tracking-wider text-slate-500">
                                        Address
                                    </span>
                                </div>
                            </div>

                            <div className="grid gap-x-2 gap-y-3 sm:grid-cols-2">
                                <Field label="Street" value={user.address.street} />
                                <Field label="Suite" value={user.address.suite} />
                                <Field label="City" value={user.address.city} />
                                <Field label="Zipcode" value={user.address.zipcode} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDetailsModal;