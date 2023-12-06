import { memo } from "react";
const generateTable = (num) => {
  const table = [];
  let startTme = performance.now();
  while (performance.now() - startTme < 800) {}
  for (let i = 1; i < num.length - 1; i++) {
    table.push(<div>{num * i}</div>);
  }
};

const Table = memo((props) => {
  console.log(props);
  const data = generateTable(props.num);
  return <>{data}</>;
});

export default Table;
