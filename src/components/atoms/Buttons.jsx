import Link from "next/link";
const Buttons = ({ children, type, href = "" }) => {
  //   {
  switch (type) {
    case "filled":
      return (
        <Link
          href={href}
          className="bg-[#4f7942] px-10 py-2 text-white text-center rounded-lg text-sm md:text-lg"
        >
          {children}
        </Link>
      );
    case "white-outline":
      return (
        <Link
          href={href}
          className=" py-2 px-5 border border-white rounded-md text-white text-center text-xs"
        >
          {children}
        </Link>
      );
    case "large-outline":
      return (
        <Link
          href={href}
          className="border border-[#4f7942] px-5 py-2 text-white inline-flex rounded-lg"
        >
          {children}
        </Link>
      );
    case "outline":
      return (
        <Link
          href={href}
          className=" py-2 px-3 border border-[#4f7942] rounded-md text-[#4f7942]"
        >
          {children}
        </Link>
      );
    default:
      return <button>select a button type</button>;
  }
  //   }
};

export default Buttons;
