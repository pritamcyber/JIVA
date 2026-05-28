import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagementPage from "./page/User_management";
import UserDetailPage from "./page/UserDetailPage";
function App() {
  return (
    <>
   <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<UserManagementPage />}
        />

        <Route
          path="/users/:id"
          element={<UserDetailPage />}
        />

      </Routes>

    </BrowserRouter>
    
    </>

  );
}

export default App;