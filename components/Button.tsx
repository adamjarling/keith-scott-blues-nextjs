interface ButtonProps {
  children: React.ReactNode;
  cb: () => void;
  size?: "sm";
  classes?: string;
}

export default function Button({ children, cb, size, classes }: ButtonProps) {
  return (
    <button
      className={`py-5 ${
        size === "sm" ? "text-sm" : "text-xl"
      } font-medium uppercase bg-white px-7 border-2 shadow border-black transition-colors duration-300 hover:bg-gray-100 ${
        classes ?? ""
      }`}
      onClick={cb}
    >
      {children}
    </button>
  );
}
