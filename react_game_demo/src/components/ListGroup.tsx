import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

// In react, a component can return only one element, it will give us an error if we return multiple element
// But we can solve it using "Fragment"
// we can use <> <-- default signal to React to use "Fragment"

// we can use { } to render data dynamically
// Render based on certain condition

// when we define a local variable it is not accessibile to the react component
// we can "Hook" it between variable and its setter method
// Each component should have its state.

// Passing data via props

function ListGroup() {
  let items = ["New York", "Delhi", "Kolkata"];
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
        handleClick; // we will pass the reference here in
      }}
    >
      {item}
    </li>
  ));

  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">{mappedItems}</ul>
    </Fragment>
  );
}

export default ListGroup;
