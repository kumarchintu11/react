import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItems'

function App() {
  // this todo is an array which have lots of values
  const [todos, setTodos] = useState([])

  // witing the functionalities
  const addTodo = (todo) => {
    // setTodos(todo)// in this way all the old values will be deleted and the new one will be inserted.
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // first find the id of the todo to be updated
  const updateTodo = (id, todo) => {
    // using prev we got prevoius state values
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo)
    ))

    // another way
    // prev.map((eachVal) =>{
    //   if(eachVal.id === id){
    //     todo
    //   }
    // })

  }

  // using map while deleting is not a good option 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(
      (todo) => todo.id !== id
    ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) =>
        prevTodo.id === id ?
          { ...prevTodo, completed: !prevTodo.completed } // first use spread operator and then update the completed by changing the opposite state of the prevoius state.
          : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] h-screen py-8 w-screen">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=> (
              <div key={todo.id}
              className='w-full'> {/* hr ek div unique hai ki nhi yekey btayega*/}
              <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
