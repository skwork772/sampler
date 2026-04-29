import React from 'react'
import { useState } from 'react';

function FavoriteColor() {
    const [color, setColor] = useState('Red');
  return (
    <div>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=> {setColor('violet')}}>Change Color</button>
    </div>
  ) 
}
  
export default FavoriteColor
