import { Box, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import {AiOutlineLeft} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { baseUrl } from "../BaseUrl";
import { AdminNavbar } from "../AdminSide/adminComponents/AdminNavbar";


export function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("DefencePostAdminDetails"))?.token
  );

  // console.log(token)
 
  async function loginPostAdmin(){
    try{
      const loginData = await axios.post(`${baseUrl}/admin/login`, userData);
      if (loginData.status === 200 && loginData.data.msg) {
        toast({
          title: "Login successful",
          description: "Have a great day",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        let obj = {token : loginData.data.token, adminName: loginData.data.name}
        localStorage.setItem("DefencePostAdminDetails", JSON.stringify(obj));
        navigate("/dp-admin/adminhome");
      } else {
        toast({
          title: "Check your credentials",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }

  

  

  // css starts
  const inputStyle = {
    border: "1.5px solid #29a4de",
    marginBottom: "40px",
    outline: "none",
    padding: "10px",
    width: "100%",
    fontSize: "17.5px",
    borderRadius : "10px",
    color : "#29a4de"
  };

  const button = {
    outline: "none",
    padding: "10px",
    width: "100%",
    backgroundColor: "#29a4de",
    cursor: "pointer",
    color: "white",
    fontSize: "17.5px",
  };
  // css ends

  // Login form functionality start
  //abhishekadmin@yopmail.com  Admin@123
  const loginForm = (event) => {
    event.preventDefault();
    // Reset the form
    // event.target.reset(); 
    loginPostAdmin();    
  };

  // handleling input here
  const handleInput = (event) => {
   let name = event.target.name;
   let value = event.target.value;

   setUserData({...userData,[name] : value});
  };

  useEffect(()=>{
    if(token){
      navigate("/dp-admin/adminhome")
    }  
  },[])

  return (
    <>
    <AdminNavbar />
      <Box
        width={{
          base: "100%",
          md: "50%",
          lg: "40%",
        }}
        margin={"auto"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        padding={"30px"}
        marginBottom={"100px"}
        marginTop={"100px"}
        borderRadius={"20px"}
        position={"relative"}
      >
        <Text fontSize={"30px"} fontWeight={"Bold"} marginBottom={"30px"}>
          Login
        </Text>

        {/* Login form  */}
        <form onSubmit={loginForm} style={{textAlign :"left"}}>
          <label htmlFor="" style={{alignItems : "left", fontSize : "20px",marginLeft:"2px"}}>Email</label>
          <input
            style={inputStyle}
            placeholder="Email or Phone Number"
            onChange={handleInput}
            name="email"
          />

          <label htmlFor="" style={{alignItems : "left", fontSize : "20px",marginLeft:"2px"}}>Password</label>
          <input
            type={showPass ? "password" : "text"}
            style={inputStyle}
            placeholder="Password"
            onChange={handleInput}
            name="password"
          />

          {/* Forget password start */}
          <Box textAlign={"right"} paddingBottom={"10px"}>
            <Link to={"/dp-admin/forgotpassword"} style={{ textDecoration: "underline", fontSize: "17.5px" }}>
              Forget Password?
            </Link>
          </Box>
          {/* Forget password ends  */}

          <input style={button} type="submit" value={"Login"} />
        </form>

        {/* Don't have account start  */}
        {/* <Text fontSize={"17.5px"} marginTop={"20px"}>
          Don't have account?{" "}
          <Link
            style={{
              textDecoration: "underline",
              color: "#27395F",
            }}
            to={"/signup"}
          >
            Sign Up
          </Link>
        </Text> */}

        <Box
          fontSize={"25px"}
          position={"absolute"}
          right={"40px"}
          top={"266px"}
          cursor={"pointer"}
        >
          {showPass ? (
            <AiFillEye
              onClick={() => {
                setShowPass(false);
              }}
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => {
                setShowPass(true);
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
