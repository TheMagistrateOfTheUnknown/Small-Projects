import ArrayAdd from "./ArrayAdd"
import { ObjectInput } from "./ObjectInput"
import ObjectInputAdd from "./ObjectInputAdd"
import { SimpleInput } from "./SimpleInput"

export function Form({ input,output }){
    function convert(what)
    {
        for (let p = 0; p < what.length; p++) {
        if(what[p] ==="string")  what[p] = "text"
        else if(what[p] === "boolean") what[p] = "radio"
        }
    }
    const headers = Object.keys(input)
    let data_o = []
    let objectArrayO =[]
    let objectsO = []
    let simpleArrayO = []
    let simpleO = []

    if(Array.isArray(output))
    {
        if(typeof output[0] ==="object") 
        {
            let kid  = Object.keys(output[0])
            let kid_types = []
            for (let i = 0; i < kid.length; i++) {
                kid_types.push(output[0][kid[i]])                        
                
            }
            convert(kid_types)
            data_o.push({isParent : true,isArray : true,name : "output",children : [ {names : kid,types : kid_types}]})
        }
        else{
            let t = output
            convert(t)
            data_o.push({isParent : false,isArray : true,name : "output",types : t})
        }
    }
    else{
        if(typeof output ==="object")
        {
            console.log("We are good")
            let kid = Object.keys(output)
            let kid_types = []
            for (let i = 0; i < kid.length; i++) {
                kid_types.push(output[kid[i]])                        
                
            }
            
            convert(kid_types)
            data_o.push({isParent : true,isArray : false,name : "output",children : [ {names : kid,types : kid_types}]})
        }
        else{
            let t = [output]
            convert(t)
            data_o.push({isParent : false,isArray : false,name : "output",types : t})
        }
    }
    for (let o = 0; o < data_o.length; o++) {
       
        if(data_o[o].isArray)        
        {
            if(data_o[o].isParent)
            {
                objectArrayO.push(data_o[o])
            }
            else{
                simpleArrayO.push(data_o[o])
            }
        }
        else{
            if(data_o[o].isParent)
            {
                objectsO.push(data_o[o])
            }
            else{
                simpleO.push(data_o[o])
            }
        }
    }

    let data = []
   
    for (let i = 0; i < headers.length; i++) {
        if(Array.isArray(input[headers[i]]))        
        {
            for (let j = 0; j < input[headers[i]].length; j++) {
                if(typeof input[headers[i]][j] === "object")
                {
                    let kid = Object.keys(input[headers[i]][j])
                    let kid_types = []
                    for (let k = 0; k < kid.length; k++) {
                        kid_types.push(input[headers[i]][j][kid[k]])                        
                    }
                    convert(kid_types)
                    data.push({isParent : true,isArray : true,name : headers[i],children : [ {names : kid,types : kid_types}]})    
                }
                else{
                    let types1 = input[headers[i]]
                    convert(types1)
                    data.push({isParent : false,isArray : true,name : headers[i] ,types : types1})
                }
                let oo = input[headers[i]][j]
            }
            //let array = Object.keys(input[headers[i]])
        }
        else if(typeof input[headers[i]] ==="object")
        {
            let objectes = Object.keys(input[headers[i]])
            let objectesTypes = []
            for (let f = 0; f < objectes.length; f++) {
                objectesTypes.push(input[headers[i]][objectes[f]])                
            }
            convert(objectesTypes)
            data.push({isParent : true,isArray : false, name : headers[i],children : [{names : objectes,types : objectesTypes}]})
        }
        else{
            let tipus = [input[headers[i]]]
            convert(tipus)
            data.push({isParent : false,isArray : false,name : headers[i],types : tipus})
        }
    }
    //const formes = document.createElement("div")
    let objectArray =[]
    let objects = []
    let simpleArray = []
    let simple = []
    for (let o = 0; o < data.length; o++) {
       
        if(data[o].isArray)        
        {
            if(data[o].isParent)
            {
                objectArray.push(data[o])
            }
            else{
                simpleArray.push(data[o])
            }
        }
        else{
            if(data[o].isParent)
            {
                objects.push(data[o])
            }
            else{
                simple.push(data[o])
            }
        }
    }
    
    return (
        <>
        <div id="form">

            <h2>Test name : </h2>
            <input id="testname" type="text" placeholder="testname"></input>
            {
                objectArray.map((value)=>{
                   return(   
                       <>
                    <div id={value.name}>
                            <h3>{value.name} is an Object</h3>
                            <ObjectInput data={value}/>
                            <ObjectInputAdd data={value}/>
                    </div>
                    </>
                    );
                })
            }
            {
                objects.map((value)=>{
                    return(   
                        <>
                         <div id={value.name}>
                                <h3>{value.name} is an Object</h3>
                                <ObjectInput data={value}/>
                         </div>
                        </>
                        );
                    })
                }
            {
                simpleArray.map((value)=>{
                    return (
                        <>
                        <div id={value.name}>
                            <h3>{value.name} is an Array</h3>
                            <SimpleInput data={value}/>
                            <ArrayAdd data={value}></ArrayAdd>
                        </div>
                        </>
                    );
                })
            }
            {
                simple.map((value)=>{
                    return(
                        <>
                        <div id={value.name}>
                            <h3>{value.name}</h3>
                            <SimpleInput data={value}/>
                        </div>
                        </>
                    );
                })
            }
            {
                objectArrayO.map((value)=>{
                    return(   
                        <>
                            <div id={value.name}>
                            <h3>{value.name} is an Object</h3>
                            <ObjectInput data={value}/>
                            <ObjectInputAdd data={value}/>
                    </div>
                    </>
                    );
                })
            }
            {
                objectsO.map((value)=>{
                    return(   
                        <>
                                 <div id={value.name}>
                                <h3>{value.name} is an Object</h3>
                                <ObjectInput data={value}/>
                         </div>
                        </>
                        );
                    })
                }
            {
                simpleArrayO.map((value)=>{
                    return (
                        <>
                        <div id={value.name}>
                            <h3>{value.name} is an Array</h3>
                            <SimpleInput data={value}/>
                            <ArrayAdd data={value}></ArrayAdd>
                        </div>
                        </>
                    );
                })
            }
            {
                simpleO.map((value)=>{
                    return(
                        <>
                        <div id={value.name}>
                            <h3>{value.name}</h3>
                            <SimpleInput data={value}/>
                        </div>
                        </>
                    );
                })
            }
            
            </div>
        </>
    );
}