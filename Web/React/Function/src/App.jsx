import { useState } from "react";
import { FunctionTester } from "./function-tester/FunctionTester";
// import json_data from "./stories/example-data/the-example";
const Complicated  = ({ isVisible, onHide }) => {
  return (
    <div>
      <div id="switch">
      { isVisible &&<button className="Switcher" onClick={onHide}>Switch to Easy</button>}
      </div>
      {isVisible && <FunctionTester 
    fn={({ x, limit }) => x.filter(e => e.grade >= limit).map(e => e.name)}
    input={{ x: [{ name: "string", grade: "number" }], limit: "number" }}
    output={["string"]}
    tests={[
      { 
        name: "empty input",     
        testFn: (fn) => {
          const input = {
            x: [], 
            limit: 0
          };
          const output = fn(input);
          return Array.isArray(output) && output.length === 0;
        },
        points: 25,
      },
      { 
        name: "one element, OK", 
        testFn: (fn) => {
          const input = {
            x: [{ name: "Győző", grade: 5 }], 
            limit: 5
          };
          const output = fn(input);
          return Array.isArray(output) && 
            output.length === 1 && 
            output[0] === "Győző";
        },
        points: 25,
      },
      { 
        name: "one element, not OK", 
        testFn: (fn) => {
          const input = {
            x: [{ name: "Győző", grade: 4 }], 
            limit: 5
          };
          const output = fn(input);
          return Array.isArray(output) && 
            output.length === 0;
        },
        points: 25,
      },
      { 
        name: "multiple elements", 
        testFn: (fn) => {
          const input = {
            x: [
              { name: "Győző", grade: 2 },
              { name: "Dávid", grade: 4 },
              { name: "Bendegúz", grade: 5 },
              { name: "Imre", grade: 3 },
            ], 
            limit: 4
          };
          const output = fn(input);
          const expectedOutput = ["Dávid", "Bendegúz"];
          return JSON.stringify(output) === JSON.stringify(expectedOutput);
        },
        points: 25,
      },
    ]}
  onFinish={result => console.log(result)}
  /> }
    </div>
  );
};

const Easy = ({ isVisible, onHide }) => {
  return (
    <div>
      <div id="switch">
     {isVisible &&<button className="Switcher" onClick={onHide}>Switch to Complicated</button>}

      </div>
        {isVisible && <FunctionTester  
            fn={({ a, b }) => a + b}
            input={{ a: "number", b: "number" }}
            output={"number"}
            tests={[
              { name: "1 + 0",    testFn: (fn) => fn({ a:1,  b:0   }) === 1  , points: 25 },
              { name: "0 + 10",   testFn: (fn) => fn({ a:0,  b:10  }) === 10 , points: 25 },
              { name: "1 + -1",   testFn: (fn) => fn({ a:1,  b:-1  }) === 0  , points: 25 },
              { name: "10 + -20", testFn: (fn) => fn({ a:10, b:-20 }) === -10, points: 25 },
            ]}  
            onFinish={result => console.log(result)}
/>}
    </div>
  );
};
export function App() {
  const [isVisibleA, setIsVisibleA] = useState(true);
  const [isVisibleB, setIsVisibleB] = useState(false);
  const handleHideA = () => {
    setIsVisibleA(false);
    setIsVisibleB(true);
  };

  const handleHideB = () => {
    setIsVisibleA(true);
    setIsVisibleB(false);
  };

  return (
    <>
     <Easy isVisible={isVisibleA} onHide={handleHideA} />
      <Complicated isVisible={isVisibleB} onHide={handleHideB} />
      </>
  
    
  );
}

export default App;

