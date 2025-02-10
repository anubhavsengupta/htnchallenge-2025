"use client"; // Ensures this runs only on the client

import React, { useState, useEffect } from "react";
import LoginButton from "./loginbutton";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Cookies.get("loggedIn") === "true");
  }, []);

  if (isLoggedIn) return null; // Hide Navbar when logged in

  return (
    <nav className="flex flex-row justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">🌟 Logo</div>
      <LoginButton />
    </nav>
  );
};

export default Navbar;
