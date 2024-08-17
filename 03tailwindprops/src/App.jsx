import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "chintu",
    age: 21
  }

 let newArr =[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl
      mb-4' >Tailwind Test</h1>
      <Card  username={"chintu"} btnText='click me'/>
      <Card  myObj={myObj}/>

    </>
  )
}

export default App
