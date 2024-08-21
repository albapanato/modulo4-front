import Link from "next/link";

export const metadata = {
  title: "Contacto",
};

export default function BookLayout({ children }) {
  return (
    <>
      <nav>
        <h3 style={{ color: "orange", fontSize: "30px" }}>
          Sección Layout Contacto
        </h3>

        <ul>
          <li>
            <Link href="/contact/book" style={{ color: " green" }}>
              Book
            </Link>
          </li>

          <li>
            <Link href="/contact/book/info" style={{ color: "yellow" }}>
              Info
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
