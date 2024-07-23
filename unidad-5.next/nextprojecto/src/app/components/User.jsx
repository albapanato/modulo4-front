import Link from "next/link";

export default async function User({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="text-center mt-10">
        <h3 className="font-bold text-xl">{user.id}</h3>
        <p className="font-bold text-xl">Nombre:{user.first_name}</p>
        <p>Apellido: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <img className="rounded-full w-30 m-auto" src={user.avatar}></img>
      </div>
    </Link>
  );
}
