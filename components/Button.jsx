const Button = ({ children, variation, ...props }) => (
  <button
    {...props}
    className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
      variation === "primary"
        ? "bg-neutral-800 hover:bg-transparent border-transparent hover:border-neutral-800 border-2 text-neutral-100 hover:text-neutral-800 box-border cursor-pointer"
        : "transparent border-2 border-neutral-700 text-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 box-border cursor-pointer"
    }`}
  >
    {children}
  </button>
);

export default Button;
