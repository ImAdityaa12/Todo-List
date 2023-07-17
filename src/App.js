import React, {useState, useEffect} from 'react'
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import './App.css'
const App = () => {

  const[inputText, setInputText] = useState("")
  const[todos, setTodos] = useState([])
  const [status, setStatus] = useState("all") 
  const [filteredTodos, setFilteredTodos] = useState([]) 
  useEffect(()=> {
    getLocalTodos()
  }, [])
  useEffect(()=> {
    filterHandler()
    saveLocalTodos()
  },[todos, status, saveLocalTodos, filterHandler])
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    let localTodos = JSON.parse(localStorage.getItem('todos'))
    setTodos(localTodos)
  }
  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  return (
    <div>
      <header>
        <h1>Aditya's Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText = {setInputText}
      setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos ={filteredTodos}/>
    </div>
  )
}

export default App
