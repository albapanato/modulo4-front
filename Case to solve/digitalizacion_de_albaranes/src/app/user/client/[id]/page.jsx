"use client";
import ClientID from "@/app/components/ClientID";
//import ShowClient from "@/app/components/ShowClient";

function ShowInfo({ params }) {
  //console.log(props)
  console.log("params", params);

  return (
    <div className="w-full">
      {/* <div>
        <ShowClient />
      </div> */}
      <div className="">
        <ClientID id={params.id} />
      </div>
    </div>
  );
}
export default ShowInfo;
