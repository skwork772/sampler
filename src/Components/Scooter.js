import React, { useState } from 'react'

function Scooter() {
    const [scooter, setScooter] = useState({
        color: 'Red',
        model: 'Vespa',
        year: 2020,
        price: 3000
    })
    // const {color, model, year, price} = scooter;

    function UpdateColor() {
        setScooter(previousState => {
            return {...previousState, color: 'Blue'}
        })
    }
  return (
    <div>
        <h1>My Scooter</h1>
        <p>Color: {scooter.color}</p>
        <p>Model: {scooter.model}</p>
        <p>Year: {scooter.year}</p>
        <p>Price: ${scooter.price}</p>
        <button onClick={UpdateColor}>change color</button>
    </div>
  )
}

export default Scooter