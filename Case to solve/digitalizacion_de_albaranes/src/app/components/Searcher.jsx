"use client";

import { useState } from "react";

export default function Searcher({ placeholder, onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value); // Llamada a la función onSearch para filtrar los proyectos
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only"></label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
