import { differences } from "../data";
import "./Button/Button.css";
import Button from "./Button/Button";
import { useState } from "react";

export default function ButtonSection() {
  const [contentType, setContentType] = useState(null); // useState всегда сверху, внутри функции
  function handleClick(type) {
    console.log("click", type);
    // content = type
    setContentType(type);
  }
  return (
    <section>
      <h3>Рow are we different from others</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Approach
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Availability
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Concentration
      </Button>
      {/* <p>{differences[contentType]}</p> */}

      {/* {contentType ? <p>{differences[contentType]}</p> : <p>Press button</p>} */}

      {!contentType && <p>Press button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
