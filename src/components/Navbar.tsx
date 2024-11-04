import { useState } from "react";
// import { Settings } from "./Setting";
import { HambergerMenu } from "iconsax-react";

interface PropsNavbar {
  setPage: (page: number) => void;
}

export const Navbar = ({ setPage }: PropsNavbar) => {
  const navLinks: string[] = [
    "Home",
    "Habilidades",
    "Projetos",
    "Experiências",
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkClick = (key: number) => {
    setActiveLink(key);
    setPage(key);
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 shadow-md h-[10%] w-full">
        <h1 className="text-2xl">M.Magalhães</h1>

        {/* Menu para telas grandes */}
        <ul className="flex gap-4 items-center justify-center max-sm:hidden">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className={`relative list-none py-2 px-1 transition-colors duration-300 cursor-pointer group
                ${
                  activeLink === key
                    ? "text-purple-700"
                    : "hover:text-purple-700"
                }`}
              onClick={() => handleLinkClick(key)}
            >
              <span>{link}</span>
              <span
                className={`absolute left-0 -bottom-[15%] h-px w-0 bg-purple-700 transition-all duration-500 ease-in-out
                  ${
                    activeLink === key
                      ? "w-full shadow-[0_0_2px_#7e22ce,0_0_10px_#7e22ce,0_0_30px_#7e22ce]"
                      : "group-hover:w-full group-hover:shadow-[0_0_2px_#7e22ce,0_0_10px_#7e22ce,0_0_30px_#7e22ce]"
                  }`}
              ></span>
            </li>
          ))}
          {/* <Settings isMenuHamburger={false} /> */}
        </ul>

        {/* Menu Hamburger para telas menores */}
        <button
          className="flex sm:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <HambergerMenu size="32" color="#7e22ce" />
        </button>
      </nav>

      {/* Menu para dispositivos móveis */}
      {showMenu && (
        <ul className="absolute w-full z-[1] flex flex-col items-center py-4 shadow-md bg-zinc-100">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className={`relative w-full text-center list-none py-3 px-1 transition-colors duration-300 cursor-pointer group
                ${
                  activeLink === key ? "bg-purple-200" : "hover:bg-purple-200"
                }`}
              onClick={() => {
                handleLinkClick(key);
                setShowMenu(false);
              }}
            >
              <span>{link}</span>
            </li>
          ))}
          {/* <li className="relative w-full text-center list-none py-3 px-1 transition-colors duration-300 hover:bg-purple-200 cursor-pointer group">
            <Settings isMenuHamburger={true} />
          </li> */}
        </ul>
      )}
    </div>
  );
};
