import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bgPrimary flex items-center justify-center flex-col text-white py-20">
      <h1 className="text-5xl font-bold text-white">Keen Keeper</h1>
      <p className="font-[14px] mt-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="mt-3">Social Links</p>
      <div className="flex items-center justify-center gap-2">
        <Link className="w-10 h-10 bg-white flex items-center justify-center rounded-full mt-2">
          <GrInstagram className="text-black w-5 h-8" />
        </Link>
        <Link className="w-10 h-10 bg-white flex items-center justify-center rounded-full mt-2">
          <FaFacebookSquare className="text-black w-5 h-8" />
        </Link>
        <Link className="w-10 h-10 bg-white flex items-center justify-center rounded-full mt-2">
          <FaXTwitter className="text-black w-5 h-8" />
        </Link>
        <Link className="w-10 h-10 bg-white flex items-center justify-center rounded-full mt-2">
          <FaLinkedin className="text-black w-5 h-8" />
        </Link>
      </div>
      <div className=" flex items-center justify-between gap-60 mt-10">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className=" flex items-center justify-between">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
