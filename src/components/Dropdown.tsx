import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Sub } from "./types";

type DropdownOption = {
  text?: string;
  name?: string;
  path: string;
  sub?: Sub[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: Boolean;
  onClick?: () => void;
};

type Props = {
  children: React.ReactNode;
  className?: string;
  options: DropdownOption[];
};

function Dropdown({ className, children, options }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={clsx(
          "relative flex items-center rounded-full text-white transition-all focus:outline-none",
          className
        )}
      >
        {children}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option: DropdownOption, index) => {
            return (
              <div className="px-1 py-1" key={index}>
                <Menu.Item disabled={!option.onClick}>
                  {({ active, disabled }) => (
                    <NavLink
                      to={option.path}
                      className={clsx(
                        "group flex w-full items-center gap-2 rounded-md bg-white px-2 py-2 text-sm text-black hover:bg-black hover:text-white",
                        active ? "bg-blue-500 text-white" : "text-gray-900",
                        disabled ? "cursor-not-allowed text-gray-400" : ""
                      )}
                      onClick={() => {
                        option.onClick?.();
                      }}
                    >
                      {option.name}
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
