import type { User } from "../types/user";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (signal?: AbortSignal): Promise<User[]> => {
    const res = await fetch(USERS_URL, { signal });

    if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
    }

    const data = (await res.json()) as unknown;

    // minimal runtime sanity: ensure array
    if (!Array.isArray(data)) {
        throw new Error("Unexpected API response");
    }

    return data as User[];
}