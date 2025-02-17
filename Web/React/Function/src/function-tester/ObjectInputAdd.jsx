import React, { useState } from 'react';
import { ObjectInput } from './ObjectInput';

function ObjectInputAdd({data}) {
  const [components, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...components,<ObjectInput data={data}/>])
    };

  return (
    <div>
      {components.map(component => component)}
      <button id="Add" className='Test' onClick={handleAddComponent} style={{ marginLeft: "30px" }}>Add</button><br></br>
    </div>
  );
}

export default ObjectInputAdd;
