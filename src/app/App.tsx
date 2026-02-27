import { Routes, Route, Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useUsers } from "../hooks/useUsers";
import { filterUsersByName, sortUsers, type SortMode } from "../lib/filterUsers";
import SearchBar from "../components/SearchBar";
import SortToggle from "../components/SortToggle";
import StateBanner from "../components/StateBanner";
import UserList from "../components/UserList";
import UserDetailsModal from "../components/UserDetailsModal";
import UserSearchEmptyState from "../components/UserSearchEmptyState";

const useDirectoryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const sort = (searchParams.get("sort") as SortMode) ?? "asc";

  const setQ = (nextQ: string) => {
    const next = new URLSearchParams(searchParams);
    if (nextQ.trim()) next.set("q", nextQ);
    else next.delete("q");
    setSearchParams(next, { replace: true });
  };

  const setSort = (nextSort: SortMode) => {
    const next = new URLSearchParams(searchParams);
    next.set("sort", nextSort);
    setSearchParams(next, { replace: true });
  };

  return { q, sort, searchParams, setQ, setSort };
};

const DirectoryPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const selectedId = params.id ? Number(params.id) : null;

  const { q, sort, searchParams, setQ, setSort } = useDirectoryParams();
  const { status, users, errorMessage, refetch } = useUsers();

  const filtered = useMemo(() => {
    const byName = filterUsersByName(users, q);
    return sortUsers(byName, sort);
  }, [users, q, sort]);

  const selectedUser = selectedId ? users.find((u) => u.id === selectedId) : undefined;

  const openUser = (id: number) => {
    const search = searchParams.toString();
    navigate({ pathname: `/users/${id}`, search: search ? `?${search}` : "" });
  };

  const closeModal = () => {
    const search = searchParams.toString();
    navigate({ pathname: "/", search: search ? `?${search}` : "" }, { replace: true });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4">
          <div className="flex-1">
            <h1 className="text-lg font-semibold tracking-tight">User Directory</h1>
            <p className="text-sm text-slate-600">Browse and search users.</p>
          </div>
          <a
            className="hidden text-sm font-medium text-indigo-700 hover:text-indigo-800 sm:inline"
            href="https://jsonplaceholder.typicode.com/users"
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-lg">
            <SearchBar value={q} onChange={setQ} />
          </div>
          <div className="shrink-0">
            <SortToggle value={sort} onChange={setSort} />
          </div>
        </div>

        <div className="mt-5">
          <StateBanner
            status={status}
            errorMessage={errorMessage}
            onRetry={refetch}
          />

          {status === "success" && filtered.length === 0 && (
            <UserSearchEmptyState searchTerm={q} onClear={() => setQ("")} />
          )}

          {(status === "success" || status === "loading") && (
            <>
              {status === "success" && filtered.length > 0 && (
                <div className="mb-3 text-sm text-slate-600">
                  Showing <span className="font-medium text-slate-900">{filtered.length}</span>{" "}
                  of <span className="font-medium text-slate-900">{users.length}</span>
                </div>
              )}
              {(status === "loading" || filtered.length > 0) && (
                <UserList
                  users={filtered}
                  onSelect={openUser}
                  selectedId={selectedId ?? undefined}
                  loading={status === "loading"}
                />
              )}
            </>
          )}
        </div>
      </main>

      <UserDetailsModal user={selectedUser} open={Boolean(selectedId)} onClose={closeModal} />
    </div >
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DirectoryPage />} />
      <Route path="/users/:id" element={<DirectoryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;