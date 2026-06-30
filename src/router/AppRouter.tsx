import { HashRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayouts";
import DashboardPage from "../pages/DashboardPage";
import ShipmentsPage from "../pages/ShipmentPage";
import WarehousePage from "../pages/WarehousePage";
import FinancePage from "../pages/FinancePage";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ReportsPage from "../pages/ReportsPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* Родительский Layout */}
        <Route element={<ProtectedRoute allowedRoles={["admin", "manager"]} />}>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="shipments" element={<ShipmentsPage />} />
            <Route path="warehouses" element={<WarehousePage />} />
            <Route path="finance" element={<FinancePage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
        </Route>
        
        {/* Отдельный путь для логина */}
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}