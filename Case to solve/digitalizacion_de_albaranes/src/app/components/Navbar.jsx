"use client";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="h-full pt-[70px] ">
      <div className="h-[70px] w-full md:w-[200px] absolute top-0 left-0 z-[9000] bg-white"></div>
      <ul className="h-fullflex p-2 overflow-scroll md:overflow-hidden md:p-4 grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavbarLink pathname={pathname} href={"/user"} text={"Clientes"} />
        <NavbarLink
          pathname={pathname}
          href={"/user/projects"}
          text={"Proyectos"}
        />
        <NavbarLink
          pathname={pathname}
          href={"/user/deliverynotes"}
          text={"Albaranes"}
        />
        <NavbarLink isLogout pathname={pathname} href={"/"} text={"Logout"} />
      </ul>
    </div>
  );
}
