import React from 'react';

var TopCow = ({active}) => (
  <div>
  <h1>{active.name}</h1>
  <h2>{active.description}</h2>
  </div>
)

export default TopCow;