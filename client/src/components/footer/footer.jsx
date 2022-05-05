import React from "react";
import "./footer.scss";

import {
  BsPinterest,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="credintials">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="info">
          <MdEmail />
          <p>contactUs@gmail.com</p>
        </div>
        <div className="info">
          <BsFillTelephoneFill />
          <p>+984291874390</p>
        </div>
        <ul className="social-media">
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsPinterest />
          </li>
        </ul>
      </div>
      <div className="customer-services">
        <h6>Customer Services</h6>
        <ul>
          <li>Track My Order</li>
          <li>Here to Help</li>
          <li>Gift Cards</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Product Recall</li>
          <li>FAQs</li>
          <li>Student Discount</li>
        </ul>
      </div>
      <div className="customer-services">
        <h6>Customer Services</h6>
        <ul>
          <li>Track My Order</li>
          <li>Here to Help</li>
          <li>Gift Cards</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Product Recall</li>
          <li>FAQs</li>
          <li>Student Discount</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
