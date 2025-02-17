import { Test } from "./Test";
import { Form } from "./Form";
import AddCustom from "./AddCustom";
let givenTestsT = [];
let sumT = 0
let sumTAll = 0
export function FunctionTester({ fn, input, output, tests, onFinish }) {
//
  const runAllT = () => {
    tests.map((_, number) => {
      let pointsT = document.getElementById("points" + number.toString());
      sumTAll+= tests[number].points
      if (tests[number].testFn(fn)) {
        pointsT.innerText = tests[number].points;
        console.log(typeof parseInt(pointsT.innerHTML, 10));
        document.getElementById("t" + number).classList.remove("black");
        document.getElementById("t" + number).classList.add("green");
        givenTestsT.push({ name  :tests[number].name, result :true})
        sumT += tests[number].points;
      } else {
        pointsT.innerText = 0;
        document.getElementById("t" + number).classList.remove("black");
        document.getElementById("t" + number).classList.add("red");
        givenTestsT.push({ name  :tests[number].name, result :false})
      }
    });
  };
 
  return (
    <>
    <div id="begin">
      <h1>FunctionTester</h1>
      <h1>Function</h1>
          {fn.toString()}
    </div>
      <h1>Tests</h1>
      <table>
        <tbody>
        <tr>
    <th>Name</th>
    <th>Result</th>
    <th>Action</th>
    <th>Points</th>
  </tr>
          {tests.map((_, index) => {
            return <Test num={index} tests_t={tests} fn={fn} />;
          })}
        </tbody>
      </table>
      <div id="runAllT" >

       <button className="Test" id="runT" onClick={runAllT}>Run all</button>
      </div>


      <Form input={input} output={output} />
      <div id="mistakes"></div>
      <AddCustom input={input} output={output} fn={fn}/>
      <div id="runAllT" >
      <button className="Test"
          onClick={() => {
            for (let i = 0; i < input.length; i++) {
            givenTestsT.push(input.tests[i].name)            
            }
            let givenTestsCt = [];
            let testnameCt = (document.querySelectorAll("td#testNameHidden"))
  
            let inputCTH = (document.querySelectorAll("td#inputH"))
            let outputCTH = (document.querySelectorAll("td#outputH"))
            let inputCtL = document.querySelectorAll("td#inputH").length
            let sumCt = 0
            let sumCtAll = 0
            for (let i = 0; i < inputCtL; i++) {
              givenTestsCt.push({name : testnameCt[i].innerText,input :JSON.parse(inputCTH[i].innerText),output :JSON.parse(outputCTH[i].innerText) , result :  document.getElementById(testnameCt[i].innerText+"circle").classList.contains("green")})
              if(document.getElementById(testnameCt[i].innerText+"circle").classList.contains("green")) sumCt+= 25
              sumCtAll+= 25
            }
            document.getElementById("runT").click()
            document.getElementById("runCt").click()
            onFinish({
              givenTests: givenTestsT,
              testResult: { achieved: sumT, all: sumTAll },
              customTests: [givenTestsCt],
              customTestResult: { achieved: sumCt, all: sumCtAll },
            });
          }}
        >
          OK
        </button>
      </div>

    </>
  );
}
