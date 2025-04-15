import { NavLink } from "react-router-dom";
import { LayoutGrid, Briefcase, Newspaper, Settings } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { name: "Overview", to: "/overview", icon: <LayoutGrid size={22} /> },
    { name: "Portfolio", to: "/portfolio", icon: <Briefcase size={22} /> },
    { name: "Blog", to: "/blogs", icon: <Newspaper size={22} /> },
    { name: "Settings", to: "/settings", icon: <Settings size={22} /> },
  ];

  return (
    <div className="w-full bg-black text-white mt-4">
      <nav className="max-w-[450px] mx-auto py-6 shadow-inner">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-[11px] gap-1 ${
                  isActive ? "text-white font-semibold" : "text-gray-400"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;

