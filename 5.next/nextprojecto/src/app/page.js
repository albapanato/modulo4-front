import User from "./components/User";

async function fetchUser() {
  const res = await fetch(`https://reqres.in/api/users`); // Aqui al pasarle ${id} al ponerle /un numero de id, solo mostrara los elementos de ese objeto
  const api = await res.json();
  return api.data;
}

export default async function Home() {
  const users = await fetchUser();
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}
