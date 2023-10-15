import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: String[];
  heading: String;

  // define a function which will be used for our callbacks to the caller.
  onSelectItem: (item: String) => void;
}

function ListGroup(props: ListGroupProps) {
  const items = props.items;
  const heading = props.heading;

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable like selectedIndex
  // arr[1]; // updater function

  // const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const mappedItems = items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        console.log(item, index);
        setSelectedIndex(index);
        props.onSelectItem(item);
        // handleClick; // we will pass the reference here in
      }}
    >
      {item}
    </li>
  ));

  return (
    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">{mappedItems}</ul>
    </Fragment>
  );
}

export default ListGroup;
