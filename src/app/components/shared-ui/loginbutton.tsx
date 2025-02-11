import Link from "next/link";

const LoginButton = () => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-4 mt-2 overflow-hidden text-sm font-medium text-gray-900 
                         rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 
                         group-hover:to-orange-400 hover:text-white dark:text-white transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-110
                         shadow-lg hover:shadow-[0px_10px_20px_rgba(255,105,180,0.5)] font-poppins">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-275 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-transparent group-hover:dark:bg-transparent">
        <Link href="/login">Login</Link>
      </span>
    </button>
  );
};

export default LoginButton;
