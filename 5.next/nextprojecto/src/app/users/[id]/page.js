import User from "@/app/components/User";

async function fetchUnUsuario(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`); // Aqui al pasarle ${id} al ponerle /un numero de id, solo mostrara los elementos de ese objeto
  const api = await res.json();
  return api.data;
}

export default async function UserPage({ params }) {
  const user = await fetchUnUsuario(params.id);
  return (
    <>
      <User user={user} />
    </>
  );
}
