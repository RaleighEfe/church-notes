const SubHeadText = ({ children }) => {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl">{children}</h3>
      <hr className="my-4"></hr>
    </div>
  );
};

export default SubHeadText;
