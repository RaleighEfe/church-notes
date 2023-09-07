const Input = ({ type, inputMode, placeholder, onChange }) => {
  return (
    <div className="block w-full h-fit p-4 bg-white/70 border-2 focus-within:border-red-400 rounded-md">
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default Input;
