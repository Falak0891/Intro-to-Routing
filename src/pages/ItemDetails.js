import { useParams } from "react-router-dom";

function ItemDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>ItemDetails</h1>
      <p>{params.id}</p>
    </>
  );
}

export default ItemDetails;
