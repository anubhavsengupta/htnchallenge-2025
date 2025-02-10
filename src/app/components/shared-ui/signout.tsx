import Link from "next/link";   
import Cookies from "js-cookie";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
const SignOut = () => {
    const router = useRouter();
    const handleSignOut = () => {
        Cookies.remove("loggedIn"); // Remove the cookie
        window.location.reload(); // Force a full page reload
      };
    
    return (
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSignOut}>
            Sign Out
          </button>
      )
  };
  
  export default SignOut;
  