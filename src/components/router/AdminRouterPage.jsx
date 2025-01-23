import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../../pages/adminDashboard/UserManagement/AdminDashboard";
import AdminProfile from "../../pages/adminDashboard/UserManagement/AdminProfile";
import AdminUser from "../../pages/adminDashboard/UserManagement/AdminUser";
import AdminUserUpgrade from "../../pages/adminDashboard/UserManagement/AdminUserUpgrade";
import AdminRenewals from "../../pages/adminDashboard/UserManagement/AdminRenewals";
import AdminResetPassword from "../../pages/adminDashboard/UserManagement/AdminResetPassword";
import ImageVerification from "../../pages/adminDashboard/UserManagement/ImageVerification";
import Pending from "../../pages/adminDashboard/Assistance/Pending";
import Success from "../../pages/adminDashboard/Assistance/Success";
import Promoters from "../../pages/adminDashboard/promoters/Promoters";
import PromoterUsers from "../../pages/adminDashboard/promoters/PromoterUsers";
import PromoterEarnings from "../../pages/adminDashboard/promoters/PromoterEarnings";
import PaytoPromoters from "../../pages/adminDashboard/promoters/PaytoPromoters";
import OnlineTransaction from "../../pages/adminDashboard/Receipts/OnlineTransaction";
import ReceiptVoucher from "../../pages/adminDashboard/Receipts/ReceiptVoucher";
import UserReports from "../../pages/adminDashboard/Reports/UserReports";
import RenewalReport from "../../pages/adminDashboard/Reports/RenewalReport";
import ReportReceipts from "../../pages/adminDashboard/Reports/ReportReceipts";
import Notifications from "../../pages/adminDashboard/notification/Notifications";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
// import PromoteUsers from '../../pages/adminDashboard/Assistance/PromoterUsers';

function AdminRouterPage() {
  return (
    <div>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/user-upgrade"
          element={
            <ProtectedRoute>
              <AdminUserUpgrade />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/renewals"
          element={
            <ProtectedRoute>
              <AdminRenewals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reset-password"
          element={
            <ProtectedRoute>
              <AdminResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/image-verification"
          element={
            <ProtectedRoute>
              <ImageVerification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pending"
          element={
            <ProtectedRoute>
              <Pending />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promoters"
          element={
            <ProtectedRoute>
              <Promoters />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promoters-users"
          element={
            <ProtectedRoute>
              <PromoterUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promoters-earnings"
          element={
            <ProtectedRoute>
              <PromoterEarnings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pay-to-promoters"
          element={
            <ProtectedRoute>
              <PaytoPromoters />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/online-transaction"
          element={
            <ProtectedRoute>
              <OnlineTransaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/receipt-voucher"
          element={
            <ProtectedRoute>
              <ReceiptVoucher />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/user-reports"
          element={
            <ProtectedRoute>
              <UserReports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/renewals-report"
          element={
            <ProtectedRoute>
              <RenewalReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/receipts"
          element={
            <ProtectedRoute>
              <ReportReceipts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminRouterPage;
