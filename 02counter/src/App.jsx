// how to import hooks
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)


  // let counter = 15
  const addValue = ()=>{

    // console.log("clicked", counter);
    /* here in clicked there is no updation in UI.
     here comes the importance of react hooks to update the UI
    */
    if (counter >=20){
      counter = 0
    }else{
      counter = counter+1
    }

    setCounter(counter)
  }

  const removeValue = ()=>{
    if (counter <=0){
      counter = 0
    }else{
      counter = counter-1  
    }

    
    setCounter(counter)
  }


  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value : {counter}</h2>

    <button  onClick={addValue}>
      Add value</button>
    <br/>
    <button onClick= {removeValue}>remove value</button>

    </>
  )
}

export default App
