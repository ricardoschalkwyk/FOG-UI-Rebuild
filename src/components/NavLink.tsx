import { NavLink as RouterNavLink } from "react-router-dom";
import clsx from "clsx";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function NavLink({
  children,
  className,
  onClick,
  to,
  onMouseOver,
  onMouseOut,
}: Props): React.ReactElement {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        clsx(className, isActive && "border-y-[3px] border-gray-500")
      }
      onClick={() => {
        onClick?.();
      }}
      onMouseOver={(e) => {
        onMouseOver?.(e);
      }}
      onMouseOut={(e) => {
        onMouseOut?.(e);
      }}
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
