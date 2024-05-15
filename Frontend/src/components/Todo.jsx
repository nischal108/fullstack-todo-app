import React from 'react';
import Todos from './Todos';

function Todo({ todo, setTodos }) {
  const { _id, title, description, completed } = todo;

  const handleSetCompleted = () => {
    fetch("http://localhost:3000/completed", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id : _id
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
    setTodos(...Todos);
  };


  const handledeletion = () =>{
    fetch("http://localhost:3000/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id : _id
      })
    })
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-[300px] m-3">
      <h2 className="text-red-950 text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="mt-2 flex justify-between">
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            completed ? 'bg-green-500' : 'bg-yellow-400'
          } text-white`}
          onClick={
            handleSetCompleted
          }
        >
          {completed ? 'Completed' : 'Incomplete'}
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm bg-red-500 text-white`}
          onClick={
            handledeletion
          }>
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default Todo;
