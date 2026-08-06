type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const style =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
      : "border border-slate-500 text-white hover:border-blue-500 hover:text-blue-400 hover:scale-105";

  return (
    <button className={`${base} ${style}`}>
      {children}
    </button>
  );
}