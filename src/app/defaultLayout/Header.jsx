"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

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
  return (
    <header>
      <nav
        className="bg-white py-4 px-48"
        style={{
          backgroundColor: "#21D4FD",
          backgroundImage: "linear-gradient(43deg, #70c1ff  0%, #FFF 100%)",
        }}
      >
        <div className="container flex justify-between items-center px-4">
          <div className="slogan flex justify-center items-center">
            <Link
              href="/pages/home"
              className=" text-indigo-600 font-bold text-3xl"
            >
              Mindmap Flow
            </Link>
          </div>
          <div className="navbar mt-3 md:flex md:ml-auto md:mt-0">
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

            {session ? (
              <>
                <span className="text-xl mx-2 text-indigo-700">
                  hi,{session?.user?.name}
                </span>
                <Link
                  href="/my-mindmap"
                  className="mx-2 p-2 text-indigo-700 text-xl rounded hover:bg-indigo-200 "
                >
                  mindmap
                </Link>
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
                <Link
                  href="/login"
                  className="mx-2 p-2 text-indigo-700 rounded hover:bg-indigo-600 hover:text-white border border-indigo-700 "
                  onClick={() => signIn()}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
