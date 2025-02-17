let num = 0
export function Custom({num,testname,input,output,fn}) {
  function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    // Iterate over the elements and compare them
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // Found a mismatch, arrays are not equal
      }
    }
  
    return true; // All elements are equal
  }  
  const handleClick = () => {
    let result = false  
    if(Array.isArray(output))
      {
        result =  compareArrays(fn(input).sort(),output.sort())
      }
      else{
        result = fn(input) === output
      }

        let pointT = document.getElementById(testname+"points")
        let radio = document.getElementById(testname+"circle")  
        if(result)
        {
          radio.classList.remove("black")
          radio.classList.add("green")
          pointT.innerText = 25
        }
        else{
          pointT.innerText = 0
          radio.classList.remove("black")
          radio.classList.add("red")
        }
      }
      const handleModify=()=>{
        console.log("Inputs :" ,input)

      }
    return(
        <>
         <tr id="hidden" className="hidden">
          <td id="inputH">{JSON.stringify(input)}</td>
          <td id="testNameHidden">{(testname)}</td>
          <td id="outputH">{JSON.stringify(output)}</td>
        </tr> 
      <tr  id={testname+"tr"}>
        <td>{num}</td>
        <td id={testname}>{testname}</td>
        <td id={testname+"circle"} className="black">
      </td>
        <td><button id={testname+"button"} onClick={handleClick} className="Test">Test</button><button className="Test" onClick={handleModify}>Modify</button><button className="Test">Delete</button> </td>
        <td id={testname+"points"}>{"-"}</td>
      </tr>     
      </>
    );
  };
  