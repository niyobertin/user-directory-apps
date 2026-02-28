# User Directory App

A robust React application for browsing, sorting, and filtering user data. Built as a technical showcase of modern frontend practices.

## Live Preview & Code

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (v4)
- **Routing:** React Router v7
- **Testing:** Vitest + React Testing Library

---

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- `npm` or `yarn`

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/niyobertin/user-directory-apps
   cd user-directory-app
   ```
2. Install the dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

### Running Tests

To run the automated test suite (Unit & Integration tests):

```bash
yarn test
# or specifically for the UI interface:
yarn test:ui
```

### Code Formatting

To format the codebase using Prettier:

```bash
yarn format
# or
npm run format
```

---

## Architecture & State Management

A core focus of this application was building a resilient and shareable state infrastructure.

### Why URL Parameters? (`useSearchParams`)

Instead of keeping the search term and active sort mechanism trapped inside local `useState` hooks, **Search (`q`)** and **Sort (`sort`)** states are hoisted into the URL using React Router.

**Benefits:**

- **Shareability:** Users can copy the URL (e.g., `/?q=Leanne&sort=desc`) and share the exact filtered state with colleagues.
- **State Preservation:** When a user clicks a profile and the modal opens (changing the route to `/users/:id`), closing the modal navigates back to the exact list state automatically.
- **Minimizing Prop Drilling:** We avoid passing endless `searchQuery` props down the tree.

### Data Fetching (`useUsers`)

Data fetching is encapsulated in a highly reusable `useUsers` custom hook.

- It uses an `AbortController` to prevent stale data overriding new requests and stops memory leaks on unmount.
- The raw API data is only fetched **once on mount**. All subsequent filtering/sorting is done cleanly on the client side via a memoized `useMemo` block to prevent unnecessary re-renders during UI interactions.

---

## Assumptions Made

1. **Client-side Filtering:** The API endpoint (`/users`) is small enough (10 records) that client-side filtering and sorting is exponentially faster and more efficient than making continuous network requests per keystroke.
2. **Read-Only Data:** The take-home prompt only requested fetching the users, so the UI assumes the data is read-only (No edit or delete mutations are provided).
3. **Data Shape:** Assumed the standard JSONPlaceholder `/users` array schema will remain consistent, so properties like `user.address.street` can be safely mapped without optional chaining at every single node.

---

## Future Improvements

If this were a production application, I would implement the following next steps :

1. **Data Caching / React Query:** If the dataset was larger or prone to background updates, swapping the custom `useUsers` hook for `TanStack Query (React Query)` would provide out-of-the-box caching, dedication re-fetching, and infinite scroll pagination.
2. **E2E Testing:** Adding Cypress or Playwright to simulate the end-to-end user journey traversing the application, simulating a real browser environment to compliment the existing Vitest integration tests.
