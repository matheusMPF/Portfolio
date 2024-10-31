import { useState } from "react";
import { Settings } from "./Setting";
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

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 shadow-md h-[10%] w-full">
        <h1 className="text-2xl">M.Magalhães</h1>

        {/* Menu para telas grandes */}
        <ul className="flex gap-4 items-center justify-center max-sm:hidden">
          {navLinks.map((link, key) => (
            <li
              key={key}
              className="relative list-none py-2 px-1 transition-colors duration-300 hover:text-purple-700 cursor-pointer group"
              onClick={() => setPage(key)}
            >
              <span>{link}</span>
              <span className="absolute left-0 -bottom-[15%] h-px w-0 bg-purple-700 transition-all duration-500 ease-in-out group-hover:w-full group-hover:shadow-[0_0_2px_#7e22ce,0_0_10px_#7e22ce,0_0_30px_#7e22ce]"></span>
            </li>
          ))}
          <Settings isMenuHamburger={false} />
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
              className="relative w-full text-center list-none py-3 px-1 transition-colors duration-300 hover:bg-purple-200 cursor-pointer group"
              onClick={() => {
                setPage(key);
                setShowMenu(false);
              }}
            >
              <span>{link}</span>
            </li>
          ))}
          <li className="relative w-full text-center list-none py-3 px-1 transition-colors duration-300 hover:bg-purple-200 cursor-pointer group">
            <Settings isMenuHamburger={true} />
          </li>
        </ul>
      )}
    </div>
  );
};
