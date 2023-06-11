import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Links = () => {
  const linkList = [
    <FaLinkedinIn />,
    <FaTwitter />,
    <FaFacebookF />,
    <FaInstagram />,
  ];
  return (
    <ul className="flex gap-4">
      {linkList.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
};

export default Links;
