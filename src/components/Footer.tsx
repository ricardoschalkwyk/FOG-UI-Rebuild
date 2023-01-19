import Nav, { navItems } from "./Nav";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className="flex h-28 items-center justify-center bg-gray-800">
      {/* Left */}
      <div className="text-t flex items-center justify-center pt-4">
        <div>
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="border-none py-2.5 px-3 text-gray-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        <div>Beans</div>
      </div>
    </div>
  );
};

export default Footer;
