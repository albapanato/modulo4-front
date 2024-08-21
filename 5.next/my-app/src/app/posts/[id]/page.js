import { Postpone } from "next/dist/server/app-render/dynamic-rendering";
import PostPages from "../page";

import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Aqui al pasarle ${id} al ponerle /un numero de id, solo mostrara los elementos de ese objeto
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  //console.log(props)
  const post = await loadPost(params.id); // params.id porque la carpeta la hemos llamado [id]
  return (
    <div>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostPages />
      </Suspense>
      <h1>Post Page {params.id}</h1>
      <h2>
        {post.id}. {post.title}
      </h2>
      <p>{post.body}</p>
      <hr />
      <h3>Otras publicaciones</h3>
    </div>
  );
}

export default Page;
