import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-400 mx-auto mb-5 font-extrabold text-white flex justify-center p-8 ">
      <Link href="/">Home</Link>
    </nav>
  );
}
