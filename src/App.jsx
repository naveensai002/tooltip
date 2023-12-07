import { Suspense, lazy, useMemo, useState } from "react";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Table from "./Table";
import ScrollLeft from "./ScrollLeft.jsx";
import Debouncing from "./Debouncing.jsx";

const Text = lazy(() => import("./Text.jsx"));

function App() {
  // const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const myObj = useMemo(() => ({ num: 10 }), []);
  // const [showText, setShow] = useState(false);
  return (
    <>
      {/* <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            asperiores doloremque, velit molestias magnam provident dicta cumque
          </div>
        }
      >
        Hover over me(tooltip above)
      </ButtonWithTooltip> */}
      {/* <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          </div>
        }
      >
        Hover over me(tooltip below)
      </ButtonWithTooltip> */}
      {/* counter */}
      {/* Counter 1: {counter1} {""}{" "}
      <button
        className="btn btn-info btn-sm"
        onClick={() => setCounter1((prev) => prev + 1)}
      >
        ++
      </button>
      <br /> <br />
      Counter 2 {counter2} {""}{" "}
      <button
        className="btn btn-info btn-sm"
        onClick={() => setCounter2((prev) => prev + 1)}
      >
        increase
      </button>
      <Table num={counter1} obj={myObj} /> */}
      {/* <button
        onClick={(e) => {
          setShow((prev) => !prev);
          console.log(e.target.scrollHeight);
        }}
        className="btn-md text-center flex items-center justify-center btn-outline mb-8 rounded-lg btn-success mt-12"
      >
        Toggle
      </button>
      {showText && (
        <Suspense fallback={<div>loading...</div>}>
          {" "}
          <Text />
        </Suspense>
      )} */}

      {/* <ScrollLeft /> */}

      {/* debouncing using lodash */}

      <Debouncing />
    </>
  );
}

export default App;
