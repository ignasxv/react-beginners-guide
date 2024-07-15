import { useState } from "react";
import ListGroup from "./ListGroup";
import Alert from "../components/Alert";
import Button from "../components/Button";

export default function ListGroupApp() {


  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleClick = (item: string) => {
    console.log(item);
  };

  const Buttons = [
    <Button text={""} whenClicked={handleClick} />,
    <Button text={""} color={"warning"} whenClicked={handleClick} />,
    <Button
      text={""}
      color={"danger"}
      whenClicked={() => {
        setAlertVisibility(!alertVisibility);
      }}
    />,
  ];

  return (
    <>
    <h1 className="display-1" >List Group App</h1>
      <ListGroup
        items={Buttons}
        heading="Listed Buttons"
      />

      {alertVisibility && (
        <Alert
          onClickButton={() => {
            setAlertVisibility(!alertVisibility);
          }}
        >
          <h1>hello World</h1>
        </Alert>
      )}
    </>
  );
}