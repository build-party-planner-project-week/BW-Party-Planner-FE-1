import React from "react";

const Todo = (props) => {
    const {todo, toggleTodoItem, deleteTodoItem, deleteTodo} = props
  return (
    <div>
      <p onClick={() => toggleTodoItem(todo.id)}>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.todoId)}>Delete</button>
      <button>Edit</button>
    </div>
  )
};

export default Todo;
