import React, { useState } from 'react';

const ComponentToDelete = ({data}) => {
    return(
        <>
                <input id={data.name} type={data.types[0]} style={{ marginLeft: "30px" }} placeholder="Array[n]"></input>{data.types[0] === "radio" ? "boolean": ""}
        </>
    );
  };

export function SimpleInput({ data })
{  
const [showComponent, setShowComponent] = useState(true);
const [isButtonVisible, setIsButtonVisible] = useState(true);
const handleDelete = () => {
  setShowComponent(false);
  setIsButtonVisible(false);
    let bb = document.getElementById("delete")
};
    if(data.isArray)
    {
        return(
            <>
                {showComponent &&  <ComponentToDelete data={data} />}
                {isButtonVisible &&(<>
                    <button id="delete" className='Delete' onClick={handleDelete} > Torles</button> <br></br>
                </>
                )}
            </>
        );
    }
    else{
        return(
            <>
                <input id={data.name} type={data.types[0]} placeholder={data.types[0]}></input>{data.types[0] === "radio" ? "boolean": ""}<br></br>
            </>
        );
    }
   
}