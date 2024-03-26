import React from "react";
import webImage from '../../Logo/webImage.avif'
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import './WebNav.css'
export default function WebNav() {
  return (
    <>
      <div className="container-fluid w-100 d-flex align-items-center justify-content-between border border-1 pt-3 pb-3">
        <div className="logo">
          <img
            src={webImage}
            alt="Logo"
            // style={{ border: "1px dashed red", padding: "5px" }}
          />
        </div>

        <div className="rightSide me-3 d-flex gap-3">
          <div>
            <NavItem >
              <NavLink className="text-danger login">Sign in</NavLink> or
              <NavLink className="text-danger login"> Register</NavLink>
            </NavItem>
          </div>
          <div role="button">
            <NavItem className="d-flex gap-2 align-items-center icon-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <NavLink className="black">WISHLIST</NavLink>
            </NavItem>
          </div>
          <div role="button">
          <NavItem className="d-flex gap-2 align-items-center icon-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <NavLink>MY CART</NavLink>
            </NavItem>
          </div>
        </div>
      </div>
    </>
  );
}
