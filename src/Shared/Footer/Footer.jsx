import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer bg-base-200 text-base-content p-10 ">
        <nav className="text-[18px] font-sans">
          <h6 className="footer-title text-xl">Services</h6>
          <a className="link link-hover">Ac Repair</a>
          <a className="link link-hover">Home Cleaning</a>
          <a className="link link-hover">Furniture Assembly</a>
          <a className="link link-hover">Garden Maintenance</a>
        </nav>
        <nav className="text-[18px] font-sans">
          <h6 className="footer-title text-xl ">Company</h6>
          <a className="link link-hover ">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link
              to={"https://www.youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition duration-200"
            >
              <FaYoutube size={24} />
            </Link>

            {/* Facebook Link */}
            <Link
              to={"https://www.facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              <FaFacebook size={24} />
            </Link>

            {/* Twitter Link */}
            <Link
              to={"https://www.twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-200"
            >
              <FaTwitter size={24} />
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-md">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
         <a className="text-orange-500" href="">Developer</a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
