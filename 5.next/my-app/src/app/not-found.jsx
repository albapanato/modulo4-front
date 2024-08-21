import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{ textAlign: "center", fontSize: "50px", padding: "100px" }}
    >
      <h1>404</h1>
      <img
        style={{ margin: "auto", padding: "100px", borderRadius: "50%" }}
        src="https://media.istockphoto.com/id/1503385646/es/foto/retrato-divertido-y-feliz-perro-cachorro-shiba-inu-asom%C3%A1ndose-detr%C3%A1s-de-una-pancarta-azul.jpg?s=612x612&w=0&k=20&c=mMZ1Dvy0J8iNpF2boWkL8bo45vYYPi_AvZ1aYr9oO8w="
        alt="cara de perro asomandose"
      />

      <p>Upss... página no encontrada</p>

      <Link href="/" style={{ color: "blue" }}>
        {" "}
        ⬅ ⬅ ⬅ Volver
      </Link>
    </section>
  );
}
