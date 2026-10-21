import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LinksPage from "./components/LinksPage/LinksPage";
import HomePage from "./components/homepage/HomePage";
import AdminPage from "./components/AdminPage/AdminPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Ihapp from "./components/IslamicHosue/IH_shell_page/ihapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ih" element={<Ihapp />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />

        {/* Catch-all route to handle invalid paths and redirect to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
