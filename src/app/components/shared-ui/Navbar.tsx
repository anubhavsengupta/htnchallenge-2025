"use client"; // Ensures this runs only on the client

import React, { useState, useEffect } from "react";
import LoginButton from "./loginbutton";
import Cookies from "js-cookie";
import SignOut from "./signout";
import Image from "next/image";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Cookies.get("loggedIn") === "true");
  }, []);


  return (
    <nav className="flex flex-row justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">
        <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
      </div>
      {isLoggedIn ? <SignOut></SignOut> : <LoginButton></LoginButton>}

    </nav>
  );
};

export default Navbar;
