"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
          src="/assets/images/logo.svg"
        />
        <p className="logo-text"> Next App</p>
        {/* desctop navigation */}
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create a Post
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
