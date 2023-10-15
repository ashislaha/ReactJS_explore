// npm create vite@latest
// cd react_game_demo
// npm install
// npm run dev

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Bangalore", "New York", "Delhi", "Kolkata"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  let onClickButton = () => {
    console.log("hello, Button clicked");
    setAlertVisiability(true);
  };

  let onCloseButton = () => {
    setAlertVisiability(false);
  };

  const [alertVisible, setAlertVisiability] = useState(false); // it returns an array

  return (
    <div>
      {alertVisible && (
        <Alert onClose={onCloseButton}>
          <h1>Hello world from Ashis</h1>
        </Alert>
      )}

      <Button onClick={onClickButton} color="primary">
        My button
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App; // export the app component
