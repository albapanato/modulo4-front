import Link from "next/link";

export default async function User({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="container m-1 mx-auto p-1 w-2/3 rounded-full flex-column justify-center items-center bg-opacity-35 bg-cyan-300  text-white  ">
        <div className="text-center m-10 rounded-full w-96 bg-red-300 mx-auto p-3">
          <img className="rounded-lg w-30 m-auto" src={user.avatar}></img>
          <h3 className="font-bold text-">{user.id}</h3>
          <p className="font-bold text-xl">Nombre: {user.first_name}</p>
          <p>Apellido: {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </Link>
  );
}
