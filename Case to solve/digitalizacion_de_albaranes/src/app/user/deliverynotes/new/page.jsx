"use client";

import DeliveryForm from "../../../components/DeliverynoteForm";

export default function NewDeliverynote() {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="w-full p-2 m-4">
        <DeliveryForm />
      </div>
    </div>
  );
}
