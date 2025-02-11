"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (email === "hacker" && password === "htn2025") {
      document.cookie = "loggedIn=true; path=/"; // set a cookie
      router.push("/"); // redirect after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-100 p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center text-black">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <p>Value: hacker</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
        />
        <p>Value: htn2025</p>
        <button
          onClick={handleLogin}
          className="w-full p-[2px] rounded mt-4 bg-gradient-to-r from-pink-500 to-orange-400 
          transform transition duration-400 hover:-translate-y-1 hover:scale-110 
          shadow-lg hover:shadow-[0px_10px_20px_rgba(255,105,180,0.5)]"

        >
          <span className="block w-full p-2 bg-black text-white rounded">
            Login
          </span>
      </button>

      </div>
    </div>
  );
};

export default Login;
