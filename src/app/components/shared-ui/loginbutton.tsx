import Link from "next/link";   
const LoginButton = () => {
    return (
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            <Link href="/login">  
              Login
            </Link>
          </button>
      )
  };
  
  export default LoginButton;
  