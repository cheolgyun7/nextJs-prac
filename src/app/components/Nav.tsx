import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full flex justify-around text-2xl my-5">
      <Link href="/">Home</Link>
      <Link href="/SSG">SSG</Link>
      <Link href="/SSR">SSR</Link>
      <Link href="/ISR">ISR</Link>
      <Link href="/CSR">CSR</Link>
    </div>
  );
};

export default Nav;
