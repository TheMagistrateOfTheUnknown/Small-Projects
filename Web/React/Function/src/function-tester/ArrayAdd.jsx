
import React, { useState } from 'react';
import { SimpleInput } from './SimpleInput';

function ArrayAdd({data}) {
  const [components, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...components,<SimpleInput data={data}/>])
    };
    
  return (
    <div>
      {components.map(component => component)}
      <button id="Add" className='Test' onClick={handleAddComponent} style={{ marginLeft: "30px" }}>Add</button><br></br>
    </div>
  );
}

export default ArrayAdd;
