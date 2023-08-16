import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="bg-registerImage bg-cover bg-center items-center justify-center h-screen">
      <div className="bg-white bg-opacity-50 md:mx-32 px-3 py-16 md:py-16">
        <h3 className="mb-4 text-2xl sm:text-3xl items-center justify-center">
          Login to ChurchNote
        </h3>
        <div className="text-base sm:text-xl grid mt-10 content-end lg:w-3/4">
          <input
            type="email"
            inputMode="email"
            placeholder="Enter your email"
            className="h-10 rounded-md p-2"
          />
          <input
            type="password"
            inputMode="password"
            placeholder="Enter your password"
            className="h-10 rounded-md my-3 p-2"
          />

          <Link href="/register/" className="text-[#4f7942]">
            Do not have an account? Register
          </Link>
        </div>
        <hr className="my-6"></hr>
        <div className="text-base sm:text-xl grid lg:w-3/4 text-center">
          <Link
            href=""
            className="h-10 rounded-md p-2 my-3 bg-[#4f7942] text-white"
          >
            Register with Google
          </Link>
          <Link
            href=""
            className="h-10 rounded-md p-2 border border-[#4f7942] text-[#4f7942]"
          >
            Register with Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
