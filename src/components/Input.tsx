import clsx from "clsx";

type Props = {
  type?: "text" | "search" | undefined;
  className: string;
};

function Input({ className, type = "text" }: Props) {
  return <input type={type} className={clsx("text-gray-900", className)} />;
}

export default Input;
