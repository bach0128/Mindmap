"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa6";

const navLink = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Price",
    link: "/price",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };
  return (
    <header>
      <nav
        className="bg-white py-4 px-4 text-center max-lg:-py-4 max-lg:px-10 min-w-full max-w-full max-lg:flex max-lg:flex-col "
        style={{
          backgroundColor: "#21D4FD",
          backgroundImage: "linear-gradient(43deg, #70c1ff  0%, #FFF 100%)",
        }}
      >
        <div className="flex justify-between text-center px-4 min-w-full max-w-full">
          {!showNav && (
            <div className="slogan">
              <Link
                href="/pages/home"
                className=" text-indigo-600 font-bold text-3xl"
              >
                Mindmap Flow
              </Link>
            </div>
          )}

          {showNav && (
            <div className="navbar mt-3 flex ml-auto lg:hidden">
              {navLink.map(({ link, name }) => (
                <Link
                  key={name}
                  href={link}
                  className={`mx-2 p-2 text-gray-700 text-xl rounded hover:bg-white hover:disabled:content-none
                ${
                  pathName === link
                    ? "bg-indigo-400 text-gray-800 hover:bg-indigo-600"
                    : ""
                }`}
                >
                  {name}
                </Link>
              ))}

              {session?.user ? (
                <>
                  <span className="w-8 h-8">
                    <img
                      className="w-8 h-8 border rounded-full hover:"
                      src={session.user.image}
                      alt="user-img"
                    />
                  </span>
                  <a
                    href="/mindmap"
                    className="mx-2 p-2 text-indigo-700 text-xl rounded hover:bg-indigo-200 "
                  >
                    mindmap
                  </a>
                  <button
                    className="mx-2 p-2 text-xl text-indigo-700 rounded hover:bg-indigo-600 hover:text-white border border-indigo-700 "
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="mx-2 p-2 text-indigo-700 text-xl rounded hover:bg-indigo-100 "
                    onClick={() => signIn()}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          )}
          <div
            className="text-indigo-600 font-bold text-3xl lg:hidden translate-x-3/4 cursor-pointer flex items-center justify-center"
            onClick={toggleNav}
          >
            <FaBars />
          </div>
          <div className="navbar mt-3 lg:flex lg:ml-auto lg:mt-0 hidden">
            {navLink.map(({ link, name }) => (
              <Link
                key={name}
                href={link}
                className={`mx-2 p-2 text-gray-700 text-xl rounded hover:bg-white hover:disabled:content-none
                ${
                  pathName === link
                    ? "bg-indigo-400 text-gray-800 hover:bg-indigo-600"
                    : ""
                }`}
              >
                {name}
              </Link>
            ))}

            {session?.user ? (
              <>
                <span className="w-8 h-8">
                  <img
                    className="w-8 h-8 border rounded-full hover:"
                    src={session.user.image}
                    alt="user-img"
                  />
                </span>
                <a
                  href="/mindmap"
                  className="mx-2 p-2 text-indigo-700 text-xl rounded hover:bg-indigo-200 "
                >
                  mindmap
                </a>
                <button
                  className="mx-2 p-2 text-xl text-indigo-700 rounded hover:bg-indigo-600 hover:text-white border border-indigo-700 "
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="mx-2 p-2 text-indigo-700 text-xl rounded hover:bg-indigo-100 "
                  onClick={() => signIn()}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
