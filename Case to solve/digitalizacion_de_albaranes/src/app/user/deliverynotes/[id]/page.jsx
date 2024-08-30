import DeliverynoteID from "../../../components/DeliverynoteID";

function ShowDeliverynote({ params }) {
  console.log("params de showDeliverynote: ", params);

  return (
    <div>
      <DeliverynoteID id={params.id} />
    </div>
  );
}
export default ShowDeliverynote;
