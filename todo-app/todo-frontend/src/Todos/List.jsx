import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
        return (
          <Todo todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} key={todo._id}/>

        )
      }).reduce((acc, cur, index) => [...acc, <hr key={index}/>, cur], [])}
    </>
  )
}

export default TodoList
