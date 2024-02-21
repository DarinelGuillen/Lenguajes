import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50 dark:bg-gray-900">
      
        <button
          onClick={() => navigate("/Filter")} 
          className="w-1/2 p-5 h-20 text-white bg-purple-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Filtrado por Nombre
        </button>
        <button
          onClick={() => navigate("/Af")} 
          className="w-1/2 h-20 text-white bg-blue-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Expresión Regular  A AF
        </button>
    </div>
  );
}

export default Button;
