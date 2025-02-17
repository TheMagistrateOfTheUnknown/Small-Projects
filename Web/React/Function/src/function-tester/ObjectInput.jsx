import React, { useState } from 'react';


const ComponentToDelete = ({names,tipu}) => {
    return(
        <>
             {names.map((value,key)=>{
                    return(
                        <>
                        <input id={value} type={tipu[key]} placeholder={value} style={{ marginLeft: "30px" }}/>{tipu[key] ==="radio" ? "Boolean" : ""}<br></br>  
                        </>
                    );
                })}
        </>
    );
  };

export function ObjectInput({ data })
{   
    let tipu = data.children[0].types
    let names = data.children[0].names
    const [showComponent, setShowComponent] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const handleDelete = () => {
      setShowComponent(false);
      setIsButtonVisible(false);
        let bb = document.getElementById("delete")
        //bb.style.display ="none"
    };
    if(data.isArray)
    {
        return(
            <>
                {showComponent &&  <ComponentToDelete names={names} tipu={tipu} />}
                {isButtonVisible &&(<>
                    <button id="delete" className='Delete' onClick={handleDelete}  style={{ marginLeft: "30px" }}> Torles</button> <br></br>
                </>
                )}
            </>
        );
    }
    else{
        return(
            <>
                {names.map((value,key)=>{
                    return(
                        <>
                        <input id={value} type={tipu[key]} placeholder={value} style={{ marginLeft: "30px" }}/>{tipu[key] ==="radio" ? "Boolean" : ""}<br></br>  
                        </>
                    );
                })}
            </>
        );
    }
   
}