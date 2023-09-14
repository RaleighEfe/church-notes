"use client";
import Buttons from "@/components/atoms/Buttons";
import Input from "@/components/atoms/Input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import auth from "../../database/services/auth";
import { FcGoogle } from "react-icons/fc";
// import initFirebase from "@/services/firebase";
// import { useAuth } from "../context/AuthUserContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (password === confirmPassword) {
      const user = await auth.signup(email, password);
      
      console.log(user);
      router.push("/login");
    } else setError("Password do not match");
    event.preventDefault();
  };

  const handleGoogleSignup = async () => {
    const user = await auth.signInWithGoogle();
    console.log(user);
  };

  return (
    <div className="bg-registerImage bg-cover bg-center h-screen p-4 grid items-center">
      <div className="grid items-center bg-black/70 md:p-4 w-full max-w-2xl mx-auto">
        <div className="grid grid-rows_[min-content] gap-6 h-fit p-4">
          <h3 className="block text-white text-3xl text-center font-semibold">
            Register for ChurchNote
          </h3>

          <form onSubmit={onSubmit}>
            <div className="grid gap-4 w-full">
              <Input
                type="email"
                inputMode="email"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                type="password"
                inputMode="password"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                type="password"
                inputMode="password"
                placeholder="Confirm password"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <button
                className="bg-[#4f7942] px-10 py-2 text-white text-center rounded-lg text-sm md:text-lg"
                // onClick={() => router.push("/login")}s
              >
                Register for Book Closet
              </button>
              {/* <Buttons type="filled">REGISTER FOR BOOK CLOSET</Buttons> */}
            </div>
          </form>

          <button
            onClick={() => handleGoogleSignup()}
            className="flex gap-1 items-center justify-center border border-[#4f7942] px-10 py-2 rounded-lg "
          >
            <FcGoogle size={24} />
            <p className="text-sm md:text-lg text-white">Google signup</p>
          </button>

          <div className="text-base sm:text-xl grid content-end lg:w-3/4">
            <Link href="/login/" className="text-gray-200 text-sm md:text-base">
              Already have an account? login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
