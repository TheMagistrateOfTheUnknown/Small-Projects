
import React, { useState } from 'react';
import { Custom } from './Custom';
let num = 0
let testnames_array = []
let inputs_array = []
let output_array = []
function AddCustom({input,output,fn}) {
  const [components, setComponents] = useState([]);
  const handleAddComponent = () => {
    let tomb = document.querySelectorAll("input");
    let headers = Object.keys(input);
    let mistakes = document.getElementById("mistakes");
    mistakes.innerText = "";
    let objectArray = [];
    let objects = {};
    let simpleArray = [];
    let simple;
    let trueArray = [];
    let testname1 = document.getElementById("testname")
    let ttobj = {}
    if(testname1.value ==="")
    {
      mistakes.innerText+="The 1. input named : testname is EMPTY\n"
    }
    else{
      ttobj["testname"] = testname1.value
    }
    //INPUT data backcodeing
    for (let i = 1; i < tomb.length; i++) {
      if (tomb[i].value === "") {
        mistakes.innerText += "The " + (i + 1) + ". input named : " + tomb[i].id + " is EMPTY\n";
      } 
    }
    if(mistakes.innerText === "")
    {
      for (let i = 0; i < headers.length; i++) {
        if (Array.isArray(input[headers[i]])) {
          for (let j = 0; j < input[headers[i]].length; j++) {
            if (typeof input[headers[i]][j] === "object") {
              let kid = Object.keys(input[headers[i]][j]);
              let how_many = 0;
  
              let div = document.getElementById(headers[i]);
              how_many = div.querySelectorAll("input#" + kid[0]).length;
              for (let o = 0; o < how_many; o++) {
                let obj = [];
                for (let oo = 0; oo < kid.length; oo++) {
                  let okl = {};
                  let inputs = div.querySelectorAll("input#" + kid[oo]);
  
                  if (inputs[o].type === "number") {
                    okl[kid[oo]] = parseInt(inputs[o].value);
                  }
                  else if(inputs[o].type ==="radio") 
                  {
                    okl[kid[oo]] = inputs[o].checked
                  }
                  else {
                    okl[kid[oo]] = inputs[o].value;
                  }
                  obj.push(okl);
                }
                const obj_real = Object.assign({}, ...obj);
                objectArray.push(obj_real);
              }
              let obj = {};
              obj[headers[i]] = objectArray;
              trueArray.push(obj);
            } else {
              let div = document.getElementById(headers[i]);
              let inputs = div.querySelectorAll("input");
              for (let si = 0; si < inputs.length; si++) {
                if (inputs[si].type === "number") {
                  simpleArray.push(parseInt(inputs[si].value));
                }else if(inputs[si].type ==="radio") 
                {
                  simpleArray.push((inputs[si].checked));
                }
                else {
                  simpleArray.push(inputs[si].value);
                }
              }
              let obj = {};
              obj[headers[i]] = simpleArray;
              trueArray.push(obj);
            }
          }
        } else {
          if (typeof input[headers[i]] === "object") {
            let objectes = Object.keys(input[headers[i]]);
            let fake_obj = {};
            for (let o = 0; o < objectes.length; o++) {
              if (document.querySelector("div#" + headers[i] + " input#" + objectes[o]).type === "number") {
                fake_obj[objectes[o]] = parseInt(
                  document.querySelector("div#" + headers[i] + " input#" + objectes[o]).value
                );
              }else if(document.querySelector("div#" + headers[i] + " input#" + objectes[o]).type === "radio") 
              {
                fake_obj[objectes[o]] = document.querySelector("div#" + headers[i] + " input#" + objectes[o]).checked;
              }
              else {
                fake_obj[objectes[o]] = document.querySelector("div#" + headers[i] + " input#" + objectes[o]).value;
              }
            }
            objects = fake_obj;
            let obj = {};
            obj[headers[i]] = objects;
            trueArray.push(obj);
          } else {
            let div = document.getElementById(headers[i]);
            let input = div.querySelector("input");
            if (input.type === "number") {
              simple = parseInt(input.value);
            }else if(input.type ==="radio") 
            {
              simple = input.checked
            }
             else {
              simple = input.value;
            }
            let obj = {};
            obj[headers[i]] = simple;
            trueArray.push(obj);
          }
        }
      }
      let TRUEinput = Object.assign({}, ...trueArray);
     
      let outputArray = []
      let outPutO = {}
      let outputS 
      let trueO = {}
      //output backcoding
      if (Array.isArray(output)) {
        if (typeof output[0] === "object") {
          let div = document.getElementById("output");
          let kids = Object.keys(output[0]);
          let inputs = div.querySelectorAll("input");
          let how_many = div.querySelectorAll("input#" + kids[0]).length;
          for (let o = 0; o < how_many; o++) {
            let obj = [];
            for (let oo = 0; oo < kids.length; oo++) {
              let okl = {};
              let inputs = div.querySelectorAll("input#" + kids[oo]);
  
              if (inputs[o].type === "number") {
                okl[kids[oo]] = parseInt(inputs[o].value);
              }else if(inputs[o].type ==="radio") 
              {
                okl[kids[oo]] = inputs[o].checked
              }
              else {
                okl[kids[oo]] = inputs[o].value;
              }
              obj.push(okl);
            }
            const obj_real = Object.assign({}, ...obj);
            outputArray.push(obj_real)
            trueO = outputArray
          }
        } else {
          let div = document.getElementById("output");
          let inputs = div.querySelectorAll("input");
          for (let k = 0; k < inputs.length; k++) {
            if(inputs[k].type ==="number")  
            {
              outputArray.push(parseInt(inputs[k].value))
            }
            else if(inputs[k].type ==="radio")
            {
              outputArray.push(inputs[k].checked)
            }
            else{
              outputArray.push(inputs[k].value)
            }
  
          }
          trueO = outputArray
        }
      } else {
        if (typeof output === "object") {
          let div = document.getElementById("output");
          let obj = {}
          let inputs = div.querySelectorAll("input");
          for (let kk = 0; kk < inputs.length; kk++) {
            
            if(inputs[kk].type ==="number")  
            {
              obj[inputs[kk].id] = parseInt(inputs[kk].value)
              
            }else if(inputs[kk].type ==="radio")
            {
              obj[inputs[kk].id] = inputs[kk].checked
            }
            else{
              obj[inputs[kk].id] = (inputs[kk].value)
            }
          }
          outPutO = obj
          trueO = outPutO
        } else {
          let div = document.getElementById("output");
          let inputs = div.querySelector("input");
          if(inputs.type === "number")
          {
            outputS = parseInt(inputs.value)
          }
          else if(inputs.type ==="radio")
          {
            outputS = inputs.checked
          }
          else{
            outputS = inputs.value
          }
          trueO = outputS
        }
      }
      
      
      TRUEinput = Object.assign({},...trueArray)
      inputs_array.push(TRUEinput)
      output_array.push(trueO)
      testnames_array.push(testname1.value)
      num++
      setComponents([...components,<Custom num={num} testname={testname1.value} input={TRUEinput} output={trueO} fn={fn}/>])
      
    }
    };
    const runEmAll=()=>{
      testnames_array.map((value)=>{
        document.getElementById(value+"button").click()
       
      })
    };
  return (
    <div>
      <div id='Create'>

       <button className='Create' onClick={handleAddComponent} >Create custom Test</button><br></br>
      </div>
      <h1>Custom Tests</h1>
      <table>
        <tbody>
        <tr>
        <th>Num</th>
    <th>Name</th>
    <th>Result</th>
    <th>Action</th>
    <th>Points</th>
  </tr>
      {components.map(component => component)}
      </tbody>
      </table>
      <div id="runAllT" >
      <button id='runCt' className='Test' onClick={runEmAll} >Run All</button><br></br>
      </div>
    </div>
    
  );
}

export default AddCustom;
