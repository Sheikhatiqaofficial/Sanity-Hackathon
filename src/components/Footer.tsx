import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Bloggers" className="text-white hover:text-blue-900 duration-200" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={"/"}
          target="blank"
        >
          <BsYoutube className="text-2xl hover:text-blue-900 duration-200" />
        </Link>
        <Link href={"https://github.com/"} target="blank">
          <BsGithub className="text-2xl hover:text-blue-900 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"/"}
          target="blank"
        >
          <BsFacebook className="text-2xl hover:text-blue-900 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"/"}
          target="blank"
        >
          <BsInstagram className="text-2xl hover:text-blue-900 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{" "}
        <Link
          href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @reactjsBD
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
