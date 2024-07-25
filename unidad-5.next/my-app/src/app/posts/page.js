// async function loadPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// }

// async function PostPages() {
//   const posts = await loadPosts();
//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>
//             {post.id}. {post.title}
//           </h3>

//           <p>{post.body}</p>
//           {/* <button onClick={() => {}}>Click</button> */}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default PostPages;

// Para que no nos de fallo, hay que crear un componente que se utilice en el lado del servidor "use client" e importarlo en esta pagina:

// ==== Ricardo, en esta 2 funciones asyncronas, como iria el orden? o se ejecutan todas a la vez? ==== Primero la funcion que estamos exportando, que seria async function PostPages(), despues por async fucntion loadPosts()

import PostCard from "@/app/components/PostCard";

async function loadPosts() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); //
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function PostPages() {
  const posts = await loadPosts();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
