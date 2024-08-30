import Link from "next/link";
const NavbarLink = ({ href, className, text, pathname, isLogout }) => {
  const isSelected = pathname === href;
  return (
    <li className={`${className}`}>
      <Link
        className={`${
          isSelected && "bg-[#4338CA] text-white"
        } flex grow rounded-md items-center justify-center gap-2 py-2 px-4 text-md font-medium  md:flex-none md:justify-start text-white ${
          isLogout
            ? "hover:text-indigo-600 hover:bg-white"
            : "hover:text-white hover:bg-[#4338CA]"
        }`}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;
