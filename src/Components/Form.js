import React from 'react'

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value)
  }
  const submitTodoHandler = (e)=>{
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {text: props.inputText , completed: false, id: Math.random()*1000}
    ])
    props.setInputText("")
  }
  const statusHandler = (e) => {
    props.setStatus(e.target.value)
  }
  return (
    <div>
        <form>
            <input value = {props.inputText} type="text" onChange={inputTextHandler} className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Form