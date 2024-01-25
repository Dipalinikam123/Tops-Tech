import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../NavBar/navbar.css";
import RegistrationModel from "../../ModelLogin/RegistrationModel";
import { User } from "lucide-react";
import LoginModel from "../../ModelLogin/LoginModel";
import { toast } from "react-toastify";

export default function Navbaaar() {
  const [logModal, setlogModal] = useState(false);
  const [regModal, setRegModal] = useState(false);
  let [refresh, setRefresh] = useState(false);
  // let [loginData, setLoginData] = useState();

  const navigate = useNavigate();
  const logData = JSON.parse(localStorage.getItem("user")) || {};
  // useEffect(() => {
  //   setLoginData(logData);
  // }, [logData]);

  const logoutFun = () => {
    localStorage.setItem("user", JSON.stringify({}));
    toast.success("LogOut successfully");
    setRefresh(true);
    navigate("/");
  };

  const logToggle = () => setlogModal(!logModal);
  const regToggle = () => setRegModal(!regModal);
  return (
    <>
      <RegistrationModel modal={regModal} toggle={regToggle} logToggle={logToggle} />
      <LoginModel modal={logModal} toggle={logToggle} regToggle={regToggle} />
      <div
        className="w-100 d-flex align-items-center p-3"
        style={{ background: "linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)" }}
      >
        <div
          className=" d-flex justify-content-start "
          style={{ color: "black", textShadow: "4px 3px 3px white" }}
        >
          <h1>LOGO</h1>
        </div>

        <div className="w-100 d-flex justify-content-center">
          <Navbar expand="lg">
            {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
            <NavbarToggler />
            <Collapse navbar className="d-flex ">
              <Nav className="me-auto d-flex gap-4" navbar>
                <NavItem>
                  <NavLink to={"/"}>HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/service"}>SERVICE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/contact"}>CONTACT US</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/product"}>PRODUCT</NavLink>
                </NavItem>
                <NavItem>
                  {logData?.loginType === "Admin" && (
                    <NavLink to={"/admin"}>ADMIN</NavLink>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <NavLink to={"/profile"}>
            <User className="text-light border border-2 rounded" />
          </NavLink>

          {logData && Object.keys(logData).length > 0 ? (
            <Button
              style={{
                backgroundColor: "red",
                borderColor:"red",
                width: "120px",
                fontWeight: "700",
              }}
              onClick={logoutFun}
            >
              Log-Out
            </Button>
          ) : (
            <>
              {/* <Button className="bg-danger" onClick={regToggle}>
            Register
          </Button>
             */}
              <Button
                style={{
                  backgroundColor: "red",
                  borderColor:"red",
                  width: "120px",
                  fontWeight: "700",
                }}
                onClick={logToggle}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
