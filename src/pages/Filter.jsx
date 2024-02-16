import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

function Filter() {
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const readExcel = async () => {
      const response = await fetch('/src/DB/db.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer);
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(jsonData);
    };

    readExcel();
  }, []);

  useEffect(() => {
    const results = data.filter(row => {
      const name = row[1];
      return typeof name === 'string' && name.toLowerCase().includes(word.toLowerCase());
    });
    setFilteredData(results);
  }, [word, data]);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-auto bg-red-50 dark:bg-gray-900'>
        <div className='w-full max-w-md m-4'>
          <label htmlFor="word" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Contacto</label>
          <input
            type="text"
            name="word"
            id="word"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar por Nombre"
            onChange={(e) => setWord(e.target.value)}
          />
        </div>

        {filteredData.length > 0 && (
          <section className="flex flex-col items-center justify-center w-full p-4">
            <div className="flex flex-col w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Datos Filtrados
                </h1>
                <div className="space-y-4 md:space-y-6">
                  {/* Inputs para mostrar los datos del primer usuario filtrado */}
                  <InputField label="Nombre Contacto" value={filteredData[0][1] || ''} />
                  <InputField label="Clave del Cliente" value={filteredData[0][0] || ''} />
                  <InputField label="Email" value={filteredData[0][2] || ''} />
                  <InputField label="Teléfono" value={filteredData[0][3] || ''} />
                </div>
                {/* Mapeo de usuarios extra */}
                {/* Mapeo de usuarios extra en una tabla con estilos de Tailwind */}


              </div>
            </div>
          </section>
        )}
         {/* Contenedor para la tabla con un estilo de fondo rojo y padding */}
         <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
          {filteredData.length > 1 && (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Nombre Contacto</th>
                    <th className="px-6 py-3">Clave del Cliente</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Email</th>
                    <th className="px-6 py-3">Teléfono</th>
                  </tr>
                </thead>
                <tbody className="border-b border-gray-200 dark:border-gray-700">
                  {filteredData.slice(1).map((user, index) => (
                    <tr key={index} className='border-b border-gray-200 dark:border-gray-700'>
                      <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{user[1]}</td>
                      <td className="">{user[0]}</td>
                      <td className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{user[2]}</td>
                      <td className="">{user[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          )}
        </div>
      </div>
    </>
  );
}

function InputField({ label, value }) {
  return (
    <div className="my-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        value={value}
        readOnly
      />
    </div>
  );
}

export default Filter;
