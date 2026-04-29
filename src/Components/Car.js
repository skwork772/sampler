import React, { Component } from 'react'

class Car extends Component {
    constructor() {
        super()
        this.state = {
            color: 'Red',
            model:'Mustang',
            year: 2021
        }
    }
  render() {
    return (
      <div>
        <h1>My Car</h1>
        <p>Model: {this.state.model}</p>
        <p>Year: {this.state.year}</p>
        <p>Color: {this.state.color}</p>
        <button onClick={()=> {this.setState((previousState) => { return { ...previousState, color: 'Blue' } })}}>Change Color</button>
      </div>
    )
  }
}

export default Car