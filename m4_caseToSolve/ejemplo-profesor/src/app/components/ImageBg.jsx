"use server";
import Image from "next/image";

export default async function ImageBg() {
  return (
    <div className="absolute inset-0 top-0 opacity-90 z-[-999]">
      <Image
        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwaW52b2ljaW5nfGVufDB8fHx8MTcxODU2NTQ1NHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1920"
        alt="Descripción de la imagen"
        width={1920}
        height={1000}
      />
    </div>
  );
}
