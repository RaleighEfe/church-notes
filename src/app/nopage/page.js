import Link from "next/link";

const NoPage = () => {
  return (
    <div className="bg-readBooks bg-cover bg-center items-center justify-center h-screen">
      <div className="bg-white bg-opacity-50 md:mx-32 px-3 py-16 md:py-16">
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
