"use client";

export default function Button({ className, text, onClick, type }) {
  return (
    <>
      <button
        className={`text-md text-white rounded-sm py-2 px-4 ${className}`}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
