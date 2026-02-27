import { useCallback, useEffect, useRef, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../lib/api";

type Status = "idle" | "loading" | "success" | "error";

export const useUsers = () => {
    const abortRef = useRef<AbortController | null>(null);

    const [status, setStatus] = useState<Status>("idle");
    const [users, setUsers] = useState<User[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const load = useCallback(async () => {
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setStatus("loading");
        setErrorMessage("");

        try {
            const result = await fetchUsers(controller.signal);
            setUsers(result);
            setStatus("success");
        } catch (err) {
            if (controller.signal.aborted) return;

            const message =
                err instanceof Error ? err.message : "Something went wrong. Please try again.";
            setErrorMessage(message);
            setStatus("error");
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        void load();
        return () => abortRef.current?.abort();
    }, [load]);

    return { status, users, errorMessage, refetch: load };
}