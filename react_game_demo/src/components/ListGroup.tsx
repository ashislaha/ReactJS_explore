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
// Props are input to the component
// we can pass { items: [], heading: String }
// using an "interface", we can define the shape of an object

// once a click event happens, let's notify the ohter component.

// State vs Props
// state: Internal data managed by a component. It is mutable.
// Props: Input pass to a component. We should treat props like immutable.

// debugging - react developer tool

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
