import { Routes, Route, Navigate } from "react-router-dom";
import DirectoryPage from "../pages/DirectoryPage";

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
