"use client"

import {useState, useEffect, useContext} from "react";

// import image
import Image from "next/image";

 //react scroll
import { Link } from "react-scroll";

// components
import SearchMobile from "./SearchMobile";

// import icons and image
import { BiX, BiMenuAltRight } from "react-icons/bi";
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";

// media query hook
import { useMediaQuery } from "react-responsive";

// import SearchContext
import { SearchContext } from "../context/searchContext";

export default function Header() {
const { setSearchActive , theme, handleThemeSwitch} = useContext(SearchContext);

const [header, setHeader] = useState(false);
const [nav, setNav] = useState(false);

const deskTopMode = useMediaQuery({
  query: '(min-width: 1300px)'
});
useEffect(()=>{
  const handleScroll = () => {
    // header
    if (window.scrollY > 40) {
      setHeader(true);
    }
    else {
      setHeader(false);
    }

    // search
    if (window.scrollY > 900){
      setSearchActive(true)
    }
    else{
      setSearchActive(false)
    }
  };


  // add event listener
  window.addEventListener('scroll', handleScroll);

  //remove event listner
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
  
  
});

  return (
    <div>
      <header
        className={`${
          header
            ? "bg-white shadow-md py-2 dark:bg-gray-900"
            : "bg-transparent shadow-none py-4"
        } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
      >
        <div className="w-full mx-auto flex flex-col xl:container xl:flex-row xl:justify-between xl:items-center ">
          <div className="flex justify-between xl:gap-[300px] items-center px-4">
            {/* ======= logo ============ */}
            <div className=" w-full">
              <div>
                <Link
                  to="home"
                  smooth={deskTopMode}
                  spy={true}
                  className="cursor-pointer"
                >
                  {theme === "light" ? (
                    <img
                      src={"/icons/logoWhite.svg"}
                      width={194}
                      height={64}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src={"/icons/logoDark.svg"}
                      width={194}
                      height={64}
                      className="dark"
                      alt="logo"
                    />
                  )}
                </Link>
              </div>
            </div>
            {/* ======= theme btn ======== */}
            <div className="flex items-center justify-center gap-8">
              <div className="">
                <div className="">
                  <button
                    className=" bg-transparent pt-1 text-2xl "
                    onClick={handleThemeSwitch}
                  >
                    {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
                  </button>
                </div>
              </div>
              {/* ======== nav open menu ======= */}
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer xl:hidden pt-1"
              >
                {nav ? (
                  <BiX className="text-4xl" />
                ) : (
                  <BiMenuAltRight className="text-4xl" />
                )}{" "}
              </div>
            </div>
          </div>
          {/* ====== nav ========== */}
          <nav
            className={`${
              nav
                ? "max-h-max py-8 px-4 xl:py-1 xl:px-0"
                : "max-h-0 xl:max-h-max"
            } flex flex-col w-full gap-y-6 bg-white dark:bg-transparent overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-2 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[16px] xl:normal-case `}
          >
            <Link
              className="cursor-pointer"
              to="home"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              Home
            </Link>

            <Link
              className="cursor-pointer"
              to="cars"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              Cars
            </Link>

            <Link
              className="cursor-pointer"
              to="about"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              About
            </Link>

            <Link
              className="cursor-pointer"
              to="why"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              Why us
            </Link>

            <Link
              className="cursor-pointer"
              to="testimonial"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              Testimonial
            </Link>

            <Link
              className="cursor-pointer"
              to="contact"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              Contact
            </Link>

            <Link
              className="xl:hidden btn btn-primary btn-sm max-w-[170px] mx-auto  "
              to="/"
              activeClass="active"
              smooth={deskTopMode}
              spy={true}
            >
              See all cars
            </Link>
            <SearchMobile />
          </nav>
        </div>
      </header>
    </div>
  );
}
