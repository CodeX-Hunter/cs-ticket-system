import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6 md:pt-16">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">

        {/* Left section */}
        <div className="">
          <h2 className="text-white text-2xl font-semibold mb-4">
            CS — Ticket System
          </h2>
          <p className="leading-relaxed text-sm">
            Welcome to CS Ticket System, your go-to solution for efficient customer support. We provide seamless ticket management, real-time tracking, and dedicated support to ensure your issues are resolved quickly and effectively.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-lg mb-4">Social Links</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaXTwitter /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@cst.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}