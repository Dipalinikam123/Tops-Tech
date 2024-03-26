import React from "react";
import {Facebook, Github, Instagram, Linkedin, Network, Twitter} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center" style={{backgroundColor:"lightskyblue"}}>
        <div className="container pt-4">
        <section className="mb-4">
          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <Facebook/>
          </a>

          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <Twitter/>
          </a>

          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <Network/>
          </a>

          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <Instagram/>
          </a>

          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <Linkedin />
          </a>

          <a
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <Github/>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}
      >
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
