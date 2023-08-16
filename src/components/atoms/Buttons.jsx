const Buttons = ({ children, className, type }) => {
  //   {
  switch (type) {
    case "filled":
      return (
        <button className="bg-[#4f7942] px-10 py-2 text-white inline-flex items-center justify-center rounded-lg text-sm md:text-lg">
          {children}
        </button>
      );
    case "white-outline":
      return (
        <button className=" py-2 px-5 border border-white rounded-md text-white inline-flex items-center justify-center text-xs">
          {children}
        </button>
      );
    case "large-outline":
      return (
        <button className="border border-[#4f7942] px-5 py-2 text-white inline-flex items-center justify-center rounded-lg">
          {children}
        </button>
      );
    default:
      return <button>select a button type</button>;
  }
  //   }
};

export default Buttons;
