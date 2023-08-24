import Link from "next/link";

const NoPage = () => {
  return (
    <div className="grid h-screen">
      <div className="bg-black/25  w-full max-w-2xl m-auto p-5">
        <div className="grid text-center justify-center items-center">
          <h4 className="text-5xl font-semibold">Oops!!!</h4>
          <p className="text-2xl p-3">Page not available, go back to </p>
          <Link href="/" className="text-2xl text-[#4f7942]">
            Home Page
          </Link>
        </div>
      </div>
    </div>
    //
  );
};

export default NoPage;
