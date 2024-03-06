import React, { useState } from 'react';

function CURP() {

  const [Name, setName] = useState('');
  const [SF, setSF] = useState('');
  const [SM, setSM] = useState('');
  const [Gender, setGender] = useState('');
  const [Birth, setBirth] = useState('');
  const [Entiti, setEntiti] = useState('');

  const handlerGenerate = (e) => {
    e.preventDefault();
    console.log("🚀 ~ CURP ~ Name:", Name)


  };

  return (
    <>
      <section className="flex w-full items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 p-0 m-0">
        <div className="flex w-full flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full   md:space-y-3 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Generador de CURP
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre (S)</label>
                  <input type="text" name="Name" id="Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pedro Fernando" required=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                  <input type="text" name="SF" id="SF" placeholder="Estrada" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                    onChange={(e) => setSF(e.target.value)}

                  />
                </div>
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido Paterno</label>
                  <input type="text" name="SM" id="SM" placeholder="Aguilar" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                    onChange={(e) => setSM(e.target.value)}

                  />
                </div>


                <div class="">
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                  {/* HERE GOES GENDER FEMENINE AN MASCULINE obteniendo valor de M y F de mas culino y femenino  */}
                  <div class="inline-flex items-center">
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                      <input type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="check" />
                      <span
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                      Remember Me
                    </label>
                  </div>

                </div>

                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de nacimiento</label>
                  <input type="text" name="Birth" id="SM" placeholder="Aguilar" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                    onChange={(e) => setBirth(e.target.value)}
                  // !Format 18/12/2023
                  />
                </div>

                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ENTIDAD DE NACIMIENTO</label>
                  <input type="text" name="Entiti" id="Entiti" placeholder="Aguilar" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                    onChange={(e) => setEntiti(e.target.value)}
                // !Default value is Chiapas or espect value
                  />
                </div>

                <button
                  onClick={handlerGenerate}

                  type="submit" className="w-full text-white bg-blue-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  GENERAR CURP
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CURP GOES HERE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CURP;
