import React from "react";
import logo from "../../assets/nav/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer py-5 px-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-4 order-2 order-md-1 text-center">
            <img className="footer-logo" src={logo} alt="" />
            <p className="copy-text opacity-50 mt-2">
              Copyright 2022 Tariqul Islam
            </p>
          </div>

          <div className="col-12 col-md-8 order-1 mb-3">
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <div className="col d-flex flex-column">
                <div className="aritcle__header d-flex justify-content-between">
                  <h3 className="footer__heading fs-5 text-uppercase">
                    Products
                  </h3>
                </div>
                <a className="footer__link" href="#">
                  Italian fruits
                </a>
                <a className="footer__link" href="#">
                  Rajshahi fruits
                </a>
                <a className="footer__link" href="#">
                  Chapai fruits
                </a>
              </div>
              <div className="col d-flex flex-column">
                <div className="aritcle__header d-flex justify-content-between">
                  <h3 className="footer__heading text-uppercase">Company</h3>
                </div>
                <a className="footer__link" href="#">
                  About
                </a>
                <a className="footer__link" href="#">
                  Affiliates
                </a>
                <a className="footer__link" href="#">
                  Blogs
                </a>
              </div>
              <div className="col d-flex flex-column">
                <div className="aritcle__header d-flex justify-content-between">
                  <h3 className="footer__heading fs-5 text-uppercase">
                    Support
                  </h3>
                </div>
                <a className="footer__link" href="#">
                  Contact
                </a>
                <a className="footer__link" href="#">
                  Knoledge base
                </a>
                <a className="footer__link" href="#">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
