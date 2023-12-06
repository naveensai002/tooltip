import { useMemo, useState } from "react";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Table from "./Table";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const myObj = useMemo(() => ({ num: 10 }), []);
  return (
    <>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            asperiores doloremque, velit molestias magnam provident dicta cumque
          </div>
        }
      >
        Hover over me(tooltip above)
      </ButtonWithTooltip>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          </div>
        }
      >
        Hover over me(tooltip below)
      </ButtonWithTooltip>
      {/* counter */}
      Counter 1: {counter1} {""}{" "}
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
      <Table num={counter1} obj={myObj} />
    </>
  );
}

export default App;
