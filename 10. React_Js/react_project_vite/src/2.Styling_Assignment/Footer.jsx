import { Aperture, Egg, Facebook, Instagram, Slack, Twitter } from "lucide-react";
import React from "react"
import './style.css'

export default function Footer(){
    return(
        <>
            <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                <Egg  className='text-success fs-1 mb-3'/>
                     nest</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled d-flex gap-3 align-items-center justify-content-center">
                    <li><a className="text-dark"  href=""><Instagram   /></a></li>
                    <li><a className="text-dark" href=""><Facebook  /></a></li>
                    <li><a className="text-dark" href=""><Twitter   /></a></li>
                    <li><a className="text-dark" href=""><Aperture   /></a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3"> 
                <h5 className="text-uppercase">Address</h5>
                <ul className="list-unstyled">
                    <li><a className="text-dark" href="">XYZ</a></li>
                    <li><a className="text-dark" href="">87654323456</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 ">© 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>
        
        </>
    );
}
