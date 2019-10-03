
import React from 'react';
import Cow from './cow.jsx'



var CowList = ({list, handleClick}) => (
  <div>
    {list.map((item, index) => <Cow individual={item} key={index} handleClick={handleClick}/>)}
  </div>
)



export default CowList;