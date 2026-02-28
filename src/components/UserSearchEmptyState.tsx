import { Search } from "lucide-react";

interface UserSearchEmptyStateProps {
  searchTerm: string;
  onClear: () => void;
}

const UserSearchEmptyState = ({ searchTerm, onClear }: UserSearchEmptyStateProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Search size={32} color="#9ca3af" strokeWidth={1.8} />
      </div>

      <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 600, color: "#111827" }}>
        No users found
      </h3>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: 14,
          color: "#6b7280",
          maxWidth: 280,
          lineHeight: 1.6,
        }}
      >
        {searchTerm ? (
          <>
            No results for <strong style={{ color: "#374151" }}>"{searchTerm}"</strong>. Try a
            different name.
          </>
        ) : (
          "We couldn't find any users matching your search. Try adjusting your filters."
        )}
      </p>

      <button
        onClick={onClear}
        style={{
          padding: "8px 18px",
          fontSize: 14,
          fontWeight: 500,
          color: "#4f46e5",
          background: "#eef2ff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Clear search
      </button>
    </div>
  );
};

export default UserSearchEmptyState;
