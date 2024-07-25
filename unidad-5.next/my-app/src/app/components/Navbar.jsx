import Link from "next/link";

import "./Navbar.css";

export default function Navbar() {
  return (
    //<nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black">
    <nav className="navbar py-5">
      <Link href="/">Home</Link>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact/book">Book</Link>
        </li>

        <li>
          <Link href="/posts">Post</Link>
        </li>
      </ul>
    </nav>
  );
}
