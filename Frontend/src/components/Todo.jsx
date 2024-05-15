import React from 'react';

function Todo({ todo }) {
  const { title, description, completed } = todo;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-red-950 text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="mt-2">
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            completed ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {completed ? 'Completed' : 'Incomplete'}
        </button>
      </div>
    </div>
  );
}

export default Todo;
