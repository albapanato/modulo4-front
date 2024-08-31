"use client";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

export default function EmptyData({ h2, p, button, href }) {
  return (
    <div className="flex justify-center ">
      <div className="w-3/4 bg-white rounded-md p-8">
        <div className="flex justify-center">
          <Image src="/img/noData.png" alt="imagen" width={300} height={300} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl ">{h2}</h2>
          <p className="text-lg mt-1">{p}</p>
        </div>
        <div className="flex justify-center mt-4">
          <ButtonLink
            text={button}
            href={href}
            className={"bg-indigo-600 text-white hover:bg-indigo-500"}
          />
        </div>
      </div>
    </div>
  );
}
