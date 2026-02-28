import { describe, expect, it } from "vitest";
import { filterUsersByName, sortUsers } from "../filterUsers";
import type { User } from "../../types/user";

const makeUser = (id: number, name: string): User =>
  ({
    id,
    name,
    username: name.toLowerCase(),
    email: `${name}@mail.com`,
    phone: "000",
    address: { street: "s", suite: "st", city: "Kigali", zipcode: "000" },
    company: { name: "C" },
  }) as User;

describe("filterUsersByName", () => {
  it("returns original list when term is empty", () => {
    const users = [makeUser(1, "Alice"), makeUser(2, "Bob")];
    expect(filterUsersByName(users, "")).toBe(users);
    expect(filterUsersByName(users, "   ")).toBe(users);
  });

  it("filters case-insensitively by name", () => {
    const users = [makeUser(1, "Leanne Graham"), makeUser(2, "Ervin Howell")];
    expect(filterUsersByName(users, "leanne")).toHaveLength(1);
    expect(filterUsersByName(users, "LEA")).toHaveLength(1);
    expect(filterUsersByName(users, "howell")).toHaveLength(1);
  });
});

describe("sortUsers", () => {
  it("sorts users ascending/descending by name", () => {
    const users = [makeUser(1, "Charlie"), makeUser(2, "Alice"), makeUser(3, "Bob")];

    expect(sortUsers(users, "asc").map((u) => u.name)).toEqual(["Alice", "Bob", "Charlie"]);
    expect(sortUsers(users, "desc").map((u) => u.name)).toEqual(["Charlie", "Bob", "Alice"]);
  });
});
