import { useState } from "react";
interface Props {
  items: String[];
  heading: String;
}
function ListGroup({ items, heading }: Props) {
  //items = [];
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };
  // let sel = -1;
  const [sel, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              sel === index ? "list-group-item active" : "list-group-item"
            }
            key={items.indexOf(item)}
            onClick={function () {
              setSelectedIndex(index);
              console.log(item, sel);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
