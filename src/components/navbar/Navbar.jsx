import { useState } from "react";
import { navLinks } from "../../Constants";

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
          <a
            href={href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f2027]/90 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors sm:px-10 px-5">
            John
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 sm:hidden hover:text-white focus:outline-none flex"
            aria-label="toggle menu">
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
