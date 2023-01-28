import React from "react";
import Child from "./Components/STATE_LIFTING/Child";

let data = `I am from parent app`;
let hasib = `I am data from parent hasib`

export default function App() {
  const dataCaryMethod = (caryParam) =>{
    console.log(caryParam)
  }
  return (
    <div>
      <Child data={data} hasi={hasib} onCarry={dataCaryMethod} />
    </div>
  );
}
