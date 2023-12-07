import React, { useEffect, useState } from "react";

const ScrollLeft = () => {
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await data.json();
    setResult(json);
  };

  useEffect(() => {
    fetchData();
    console.log(result);
  }, []);
  return <div>scroll left example</div>;
};

export default ScrollLeft;
