import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { AdminHome } from "../AdminSide/AdminPages/AdminHome";
import { AdminPost } from "../AdminSide/AdminPages/AdminPost";
import { AdminCourse } from "../AdminSide/AdminPages/AdminCourse";
import { AdminFree } from "../AdminSide/AdminPages/AdminFree";
import { AdminSignUp } from "../AdminSide/AdminPages/AdminSignUp";
import { Coupon } from "../AdminSide/AdminPages/Coupon";
import { ForgotPassword } from "../components/ForgotPassword";
import { ResetPassword } from "../components/ResetPassword";
import { AdminAddCourse } from "../AdminSide/AdminPages/AdminAddCourse";

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dp-admin/" element={<Login />} />
        <Route path="/dp-admin/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dp-admin/forgot-password/:id/:token" element={<ResetPassword />} />
        <Route path="/dp-admin/adminhome" element={<AdminHome />} />
        <Route path="/dp-admin/adminpost" element={<AdminPost />} />
        <Route path="/dp-admin/admincourse" element={<AdminCourse />} />
        <Route path="/dp-admin/adminaddcourse" element={<AdminAddCourse />} />
        <Route path="/dp-admin/adminfree" element={<AdminFree />} />
        <Route path="/dp-admin/adminsignup" element={<AdminSignUp />} />
        <Route path="/dp-admin/coupon" element={<Coupon />} />
      </Routes>
    </>
  );
}
