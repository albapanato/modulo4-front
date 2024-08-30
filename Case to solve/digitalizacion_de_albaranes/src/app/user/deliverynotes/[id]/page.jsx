import { Suspense } from "react";
import DeliverynoteID from "../../../components/DeliverynoteID";
import LoadingSpinner from "../../../components/LoadingSpinner";

function ShowDeliverynote({ params }) {
  return (
    <div className="mt-[70px] h-full flex justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25">
      <div className="p-2 m-4 w-full">
        <Suspense fallback={<LoadingSpinner fullView />}>
          <DeliverynoteID id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}
export default ShowDeliverynote;
