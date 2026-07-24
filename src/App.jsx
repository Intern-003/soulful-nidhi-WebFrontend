import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundandCancellation from "./Pages/RefundandCancellation";
import TermsAndConditions from "./Pages/TermsAndConditions";
import AllBlogs from "./Pages/AllBlogs";
import BlogDetails from "./Pages/BlogDetails";
import Career from "./Pages/Career";
import SignUp from "./Pages/SignUp";
import ApplyJob from "./Pages/ApplyJob";

import ScrollTop from "./components/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------- ADMIN ---------- */
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Positions from "./admin/pages/Positions";
import Candidates from "./admin/pages/Candidates";
import Blogs from "./admin/pages/Blogs";

/* ---------- ROUTE PROTECTION ---------- */
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <ScrollTop />
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* ================= MAIN WEBSITE ================= */}
        <Route path="/" element={<Layout />}>

          <Route
            path="Refund&Cancellation"
            element={<RefundandCancellation />}
          />

          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About/>}/>
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="careers" element={<Career />} />
          <Route path="careers/apply/:id" element={<ApplyJob />} />
        </Route>

        {/* ================= ADMIN PANEL (PROTECTED) ================= */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="positions" element={<Positions />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
