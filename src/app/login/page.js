import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="bg-loginImage bg-cover bg-center h-screen p-4 grid items-center">
      <div className="grid items-center bg-black/70 md:p-4 w-full max-w-2xl mx-auto">
        <div className="grid grid-rows_[min-content] gap-6 h-fit p-4">
          <h3 className="block text-white text-3xl text-center font-semibold">
            Login to ChurchNote
          </h3>

          <form>
            <div className="grid gap-4 w-full">
              <div className="block w-full h-fit p-4 bg-white/70 border-2 focus-within:border-red-400 rounded-md">
                <input
                  type="email"
                  inputMode="email" 
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <div className="block w-full h-fit p-4 bg-white/70 border-2 focus-within:border-red-400 rounded-md">
                <input
                  type="password"
                  inputMode="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </form>
          <div className="text-base sm:text-xl grid content-end lg:w-3/4">
            <Link
              href="/register/"
              className="text-gray-200 text-sm md:text-base"
            >
              Already have an account? register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
