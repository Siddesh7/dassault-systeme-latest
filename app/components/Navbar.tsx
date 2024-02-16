"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {signIn, useSession, signOut} from "next-auth/react";

const Navbar = () => {
  const {data: session} = useSession();
  console.log(session);
  return (
    <div className="navbar bg-opacity-20 backdrop-blur-xl bg-white/30 rounded-2xl  z-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center bg-opacity-50 bg-white/20 px-4  py-3 rounded-xl">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-[120px] md:w-[200px]" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {!session?.user ? (
          <button
            className="btn btn-primary rounded-xl px-4 py-2 mr-[10px]"
            onClick={() => {
              signIn("google");
            }}
          >
            Sign in
          </button>
        ) : (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={session?.user?.image!}
                  width={500}
                  height={500}
                  alt="user"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
            >
              <li>
                <p>{session?.user?.name}</p>
              </li>
              <li>
                <a
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
