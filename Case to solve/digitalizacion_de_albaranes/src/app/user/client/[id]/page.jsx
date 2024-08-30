import ClientID from "../../../components/ClientID";

function ShowInfo({ params }) {
  console.log("params", params);

  return (
    <div className="w-full mt-16">
      <div className="text-center">
        <ClientID id={params.id} />
      </div>
    </div>
  );
}
export default ShowInfo;
