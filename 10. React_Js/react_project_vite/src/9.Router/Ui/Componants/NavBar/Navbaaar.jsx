import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../NavBar/navbar.css";
import RegistrationModel from "../../ModelLogin/RegistrationModel";
import { User } from "lucide-react";

export default function Navbaaar() {
  const [regModal, setRegModal] = useState(false);
  const regToggle = () => setRegModal(!regModal);

  const regData = JSON.parse(localStorage.getItem("user"));
  console.log("=========", regData);

  const logoutFun = () => {
    localStorage.setItem("user", JSON.stringify({}));
    setRegModal(true);
  };

  return (
    <>
      <RegistrationModel modal={regModal} toggle={regToggle} />
      <div
        className="w-100 d-flex align-items-center p-3"
        style={{ background: "linear-gradient(0,lightBlue,black)" }}
      >
        <div
          className=" d-flex justify-content-start "
          style={{ color: "purple", textShadow: "2px 2px 2px white" }}
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
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <NavLink to={"/profile"}>
            <User className="text-light border border-2 rounded" />
          </NavLink>

          {Object.keys(regData).length > 0 ? (
            <Button
              style={{
                backgroundColor: "red",
                width: "120px",
                fontWeight: "700",
              }}
              onClick={logoutFun}
            >
              Log-Out
            </Button>
          ) : (
            <Button
              style={{
                backgroundColor: "red",
                width: "120px",
                fontWeight: "700",
              }}
              onClick={regToggle}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
