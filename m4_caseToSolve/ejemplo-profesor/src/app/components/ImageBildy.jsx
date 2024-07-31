import Image from "next/image";
import Link from "next/link";

export default async function ImageBildy() {
  return (
    <div className="opacity-85 block">
      <Link href="/">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/YrDavvyjv6iGX8vM/backcolor-transp-blue-YbNa2QX663tzjZ79.png"
          alt="Logo Bildy"
          width={200}
          height={125}
        />
      </Link>
    </div>
  );
}
