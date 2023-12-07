import React, { useCallback, useEffect, useMemo, useState } from "react";

import { debounce } from "lodash";

const Debouncing = () => {
  const [inputString, setString] = useState("");
  const [data, setData] = useState([]);

  const debouncedData = useMemo(
    () =>
      debounce(async (inputString) => {
        const res = await fetch(
          `https://swapi.dev/api/people/?search=${inputString}`
        );
        const jsonData = await res.json();
        console.log(jsonData);
        setData(jsonData);
      }, 300),
    []
  );

  useEffect(() => {
    debouncedData.cancel();
  }, []);
  const changeHandler = (ev) => {
    setString(ev.target.value);
    // console.log(ev.target.value);
    debouncedData(ev.target.value);
  };

  return (
    <div>
      <input
        type="search"
        className="input mt-10 ml-12 input-bordered input-accent w-full max-w-xs"
        value={inputString}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Debouncing;
Debouncing;
