import { Box, Text } from "@chakra-ui/react";
import { AdminNavbar } from "../adminComponents/AdminNavbar";
import { UserManagement } from "../adminComponents/UserManagement";
import { BlockedUsers } from "../adminComponents/BlockedUsers";
import { ReviewManagement } from "../adminComponents/ReviewManagement";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function AdminHome() {
  // let text = `<Text style="color:red">chal ja</Text>`
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("DefencePostAdminDetails"))?.token

  useEffect(()=>{
    if(!token){
      navigate("/dp-admin")
    }
  },[token])

  return (
    <>
      <AdminNavbar />
      <Box padding={"0px 15px"}>
        <UserManagement />
      </Box>
    </>
  );
}
