import ClientID from "../../../components/ClientID";
import { Suspense } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

function ShowInfo({ params }) {
  console.log("params", params);

  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="p-2 m-4 w-full">
        <Suspense fallback={<LoadingSpinner fullView />}>
          <ClientID id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}
export default ShowInfo;
