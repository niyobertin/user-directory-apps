import type { User } from "../types/user";

export type SortMode = "asc" | "desc";

export const filterUsersByName = (users: User[], term: string): User[] => {
  const q = term.trim().toLowerCase();
  if (!q) return users;

  return users.filter((u) => u.name.toLowerCase().includes(q));
};

export const sortUsers = (users: User[], mode: SortMode): User[] => {
  const dir = mode === "asc" ? 1 : -1;

  return [...users].sort((a, b) => dir * a.name.localeCompare(b.name));
};
