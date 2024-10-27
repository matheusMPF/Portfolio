import { Settings } from "./Setting";

const navLinks: string[] = ["Home", "Habilidades", "Projetos", "Experiências"];

interface PropsNavbar {
  setPage: (page: number) => void;
}

export const Navbar = ({ setPage }: PropsNavbar) => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md h-[12%] w-full bg-zinc-100">
      <h1 className="text-2xl">M.Magalhães</h1>
      <ul className="flex gap-4 items-center justify-center">
        {navLinks.map((link, key) => (
          <li
            key={key}
            className="relative list-none py-2 px-1 transition-colors duration-300 hover:text-purple-700 cursor-pointer group"
            onClick={() => {
              setPage(key);
            }}
          >
            <span>{link}</span>
            <span className="absolute left-0 -bottom-1/3 h-px w-0 bg-purple-700 transition-all duration-[0.5s] ease-in-out group-hover:w-full group-hover:shadow-[0_0_2px_#7e22ce,0_0_10px_#7e22ce,0_0_30px_#7e22ce]"></span>
          </li>
        ))}
        <Settings />
      </ul>
    </nav>
  );
};
