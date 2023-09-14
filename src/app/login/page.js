"use client";
import Input from "@/components/atoms/Input";
import Link from "next/link";
import { useState } from "react";
import auth from "../../database/services/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const user_data = await auth.signIn(user);
    router.push("/user-dashboard/dashboard");
    console.log(user);
  };
  return (
    <div className="bg-loginImage bg-cover bg-center h-screen p-4 grid items-center">
      <div className="grid items-center bg-black/70 md:p-4 w-full max-w-2xl mx-auto">
        <div className="grid grid-rows_[min-content] gap-6 h-fit p-4">
          <h3 className="block text-white text-3xl text-center font-semibold">
            Login to Book Closet
          </h3>

          <form onSubmit={onSubmit}>
            <div className="grid gap-4 w-full">
              <Input
                type="email"
                inputMode="email"
                placeholder="Enter your email"
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
              />
              <Input
                type="password"
                inputMode="password"
                placeholder="Enter your password"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
              <button
                className="bg-[#4f7942] px-10 py-2 text-white text-center rounded-lg text-sm md:text-lg"
                // onClick={() => router.push("/login")}s
              >
                Log in to Blook Closet
              </button>
              {/* <Buttons type="filled"></Buttons> */}
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
