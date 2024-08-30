"use client";

export default function ButtonInput({ className, text }) {
  return (
    <input
      type="submit"
      value={text}
      className={`text-md text-white rounded-sm py-2 px-4 ${className}`}
    ></input>
  );
}
