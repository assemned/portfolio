"use client";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` w-full z-10 duration-300 ease max-[950px]:hidden ${
          scrolled ? "fixed bg-black py-2 shadow-xl" : "absolute py-4"
        }`}>
        <div className=" flexCenter max-c p-x ">
          <div className="flex-1 flexStart">
            <a href="/">
              {scrolled ? (
                <img
                  src="/logoWhite.png"
                  alt="logo"
                  className="w-12 cursor-pointer"
                />
              ) : (
                <img
                  src="/logoBlack.png"
                  alt="logo"
                  className="w-24 cursor-pointer"
                />
              )}
            </a>
          </div>
          <ul className="flexEnd gap-10 flex-1 p4 font-semibold text-white">
            <li>
              <a
                href="#about"
                className={scrolled ? "navbar-hover-center" : "navbar-hover"}>
                About me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={scrolled ? "navbar-hover-center" : "navbar-hover"}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={scrolled ? "navbar-hover-center" : "navbar-hover"}>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={!scrolled ? "btn-white" : "navbar-hover-center"}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="min-[950px]:hidden fixed bg-black w-full z-20 flexCenterCol shadow-xl">
        <div className={`flexBetween w-full relative pr-5 z-10 py-1 bg-black `}>
          <a href="/">
            <img
              src="/logoWhite.png"
              alt="logo"
              className="w-16 cursor-pointer"
            />
          </a>
          {!menu ? (
            <MdMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMenu(true)}
            />
          ) : (
            <MdClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMenu(false)}
            />
          )}
        </div>
        <ul
          className={`flexCenterCol bg-black w-full ${
            menu ? "top-full" : "-top-[250%]"
          } absolute left-0 gap-10 p2 font-semibold text-white border-t-2 border-b-2 border-white py-5 duration-500 ease shadow-xl `}>
          <li>
            <a onClick={() => setMenu(false)} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={() => setMenu(false)} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setMenu(false)} href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={() => setMenu(false)} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
