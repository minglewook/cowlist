import React from 'react';


var Cow = ({individual, handleClick}) => (
  <li onClick={()=> {
    handleClick(individual.id, individual.name, individual.description)
  }}>
    {individual.name}
  </li>
)

export default Cow;