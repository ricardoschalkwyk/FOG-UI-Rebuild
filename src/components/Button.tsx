import clsx from "clsx";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

function Button({ type = "button", className, onClick, children }: Props) {
  return (
    <button
      type={type}
      className={clsx("bg-slate-900", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
