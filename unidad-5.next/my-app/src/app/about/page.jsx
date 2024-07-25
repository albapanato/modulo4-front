"use client";

import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();

  return (
    <>
      <div className="container text-center">
        <h1 className="bg-indigo-500 mx-auto px-4 p-4 m-4 ">About</h1>

        <p className="bg-red-500 mx-auto px-4 p-4 m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, …
        </p>

        <button
          className="bg-sky-400 px-3 py-2 rounded-md"
          onClick={() => {
            alert("Executing...");
            router.push("/");
          }}
        >
          Click
        </button>
      </div>
    </>
  );
}

export default AboutPage;
