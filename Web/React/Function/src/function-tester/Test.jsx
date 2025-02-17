//import { FunctionTester } from "./function-tester/FunctionTester";
// import json_data from "./stories/example-data/the-example";

export function Test({num,tests_t,fn}) {
  
  let b = num
  const myLambda = tests_t[num].testFn
  const theFn = fn
  const handleClick = () => {
    const result = myLambda(theFn)
    let pointT = document.getElementById("points"+num.toString())
    let radio = document.getElementById("t"+num.toString())  
    if(result)
    {
      radio.classList.remove("black")
      radio.classList.add("green")
      pointT.innerText = tests_t[num].points
    }
    else{
      pointT.innerText = 0
      radio.classList.remove("black")
      radio.classList.add("red")
    }
  }
    return (
    <>
    <tr>
      <td id="idT">{tests_t[num].name}</td>
      <td id={"t"+num.toString()} className="black">
      </td>
      <td>
        <button className="Test" onClick={handleClick}>Test</button>
      </td>
      <td id={"points"+num.toString()} /*class="hidden"*/ >{"-"}</td>
    </tr>
    </>
  );
};
