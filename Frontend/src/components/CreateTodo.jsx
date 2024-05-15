import React, { useState } from 'react';

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          name="description"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
