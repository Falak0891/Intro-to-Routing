import { Link } from "react-router-dom";

function Items() {
  const items = [
    { id: "i-1", title: "Item1" },
    { id: "i-2", title: "Item2" },
    { id: "i-3", title: "Item3" },
  ];
  return (
    <>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Items;
