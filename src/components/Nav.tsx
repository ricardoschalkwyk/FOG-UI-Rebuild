import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import NavLink from "./NavLink";
import { NavItem } from "./types";

export const navItems: NavItem[] = [
  { id: 1, name: "Home", path: "home", active: false },
  {
    id: 2,
    name: "About Us",
    path: "about",
    sub: [{ id: 1, mandate: "Our Mandate", leadership: "Leadership" }],
    active: false,
  },
  {
    id: 3,
    name: "Recourses",
    path: "recourses",
    sub: [{ id: 1, mandate: "Podcast", leadership: "" }],
    active: false,
  },
  { id: 4, name: "Giving", path: "giving", active: false },
  {
    id: 5,
    name: "Sharing",
    path: "sharing",
    active: false,
  },
  { id: 6, name: "Locations", path: "locations", active: false },
  { id: 7, name: "Contact Us", path: "contact", active: false },
];

const Nav = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(navItems);

  const handleHoverOn = (index: any) => {
    let newArray = navItems.map((item) => ({ ...item, active: false }));
    newArray[index].active = !newArray[index].active;
    setIsActive(newArray);
  };

  const handleHoverOff = (index: any) => {
    let newArray = navItems.map((item) => ({ ...item, active: false }));
    newArray[index].active = !newArray[index].active;
    setIsActive(newArray);
  };

  return (
    <div className="fixed z-10 flex w-full items-center justify-center gap-40 bg-white py-2.5 shadow-md shadow-gray-400">
      <div>
        <Button className="bg-white">
          <img
            src="https://www.friendofgodchurch.com/wp-content/uploads/2020/12/Friend-of-God-Logo-1030x276-1.png"
            alt="Image"
            className="w-[165px]"
          />
        </Button>
      </div>
      <div className="hidden items-center justify-center font-extrabold lg:flex lg:text-base">
        {isActive.map((item, index) => (
          <div>
            <NavLink
              to={item.path}
              key={index}
              className="border-gray-500 py-2.5 px-5 text-gray-500 hover:border-y-[3px]"
              onMouseOver={() => {
                handleHoverOn(index);
              }}
              onMouseOut={() => {
                handleHoverOff(index);
              }}
            >
              {item.name}
            </NavLink>

            <div>
              {item.active &&
                item.sub?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="absolute top-16 flex flex-col bg-white px-4 py-2"
                    >
                      <Button
                        onClick={() => {
                          navigate("about/leadership");
                        }}
                        className="bg-white"
                      >
                        {item.leadership}
                      </Button>

                      <Button
                        onClick={() => {
                          navigate("about/mandate");
                        }}
                        className="bg-white"
                      >
                        {item.mandate}
                      </Button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <Dropdown
          className="bg-gray-800 text-gray-400 hover:text-black focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-red-800"
          options={[
            { name: "Home", path: "/home" },
            {
              name: "About Us",
              path: "/about",
              sub: [
                { id: 1, mandate: "Our Mandate", leadership: "Leadership" },
              ],
            },
            { name: "Recourses", path: "/recourses" },
            { name: "Giving", path: "/giving" },
            { name: "Sharing", path: "/sharing" },
            { name: "Locations", path: "/locations" },
            { name: "Contact Us", path: "/contact" },
          ]}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gray-900 text-white">
            <Bars3Icon />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
