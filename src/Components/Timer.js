import {React, useState, useEffect} from 'react'

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count is Rendered');
        //checkCount();
        setTimeout(() => {
            setCount((previousState) => {return previousState + 1})
        },1000)
    })

    function checkCount(){
        if(count === 10){
            setCount(0);
        }
    }

    function countTime(){
        setCount((previousCount) => {return previousCount + 1});
           checkCount();
    }
  return (
    <div>
        <h1>The counter time is the {count}</h1>
        <button onClick={countTime}>count time</button>
    </div>
  )

}

export default Timer