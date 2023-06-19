const Buttons = ({ children, className, type }) => {
  //   {
  switch (type) {
    case "filled":
      return (
        <div className="bg-[#4CA456] px-10 py-2 text-white inline-flex items-center justify-center rounded-lg text-sm md:text-lg">
          {children}
        </div>
      );
    case "white-outline":
      return (
        <div className=" py-2 px-5 border border-white rounded-md text-white inline-flex items-center justify-center text-xs">
          {children}
        </div>
      );
    case "large-outline":
      return (
        <div className="border border-[#4CA456] px-5 py-2 text-white inline-flex items-center justify-center rounded-lg">
          {children}
        </div>
      );
    default:
      return <div>select a button type</div>;
  }
  //   }
};

export default Buttons;
