import React from 'react';
import Todo from './Todo';

function Todos({ todos, setTodos }) {
  return (
    <div className="flex flex-wrap">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo}  setTodos={setTodos} />
      ))}
    </div>
  );
}

export default Todos;