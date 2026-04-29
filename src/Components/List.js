import React from 'react'
import { useState } from 'react';

function List() {
    const [List, setList] = useState([])
    const [count, setCount] = useState(1)

    function AddItem() {
        const itemName = 'item'+count
        setList((previousState) => { return [...previousState, itemName ] })
        setCount((previousCount) => {return previousCount + 1})
    }

    console.log("Current state :" + List)
  return (
    <div>
        <button onClick={AddItem}>Add Item</button>
        <h1>My List</h1>
        <ul>
            {
                List.map((el, index) => <li key={index}>{el}</li>)
            }
        </ul>
        
    </div>
  )
}

export default List