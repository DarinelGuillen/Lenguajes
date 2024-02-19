import React, { useState } from 'react';

function Af() {
    const [input, setInput] = useState('');
    const q0Toq1 = input.startsWith('1');
    const q1Toq2 = input.startsWith('11');
    const q2Toq3 = input.startsWith('110');
    const q3Toq4 = input === '1101';

    const handleChange = (e) => {
        if (e.target.value.startsWith(input) && "1101".startsWith(e.target.value)) {
            setInput(e.target.value);
        }
    };

    return (
        <>
            <div className="flex w-full bg-gray-800 h-screen items-center justify-center">
                <div className="flex w-full p-9 flex-col items-center justify-center min-h-screen">
                    <label htmlFor="text" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Introduce la Cadena "1101"</label>
                    <input
                        type="text"
                        className="m-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={input}
                        onChange={handleChange}
                        placeholder="1101"
                    />
                    <div className="bg-gray-700 w-full h-80 min-h-1/2 space-y-5 flex justify-center items-center ">
                        <div className="w-[90%] h-auto bg-green-700  flex items-center justify-center gap-x-10">
                            <div className={` transition-all duration-500 ease-in-out opacity-100 opacity-0 text-center bg-blue-700 rounded-full w-10 h-10`}>q0</div>

                            <svg className="  h-4 w-22">
                                <line x1="10" y1="0" x2="130" y2="0" stroke="red" strokeWidth="2" className='opacity-100 opacity-0' />
                                <polyline points="125,0 120,-5 130,0 120,5" stroke="red" strokeWidth="2" fill="none" className='opacity-100 opacity-0' />
                            </svg>
                            <div className={`  transition-all duration-500 ease-in-out opacity-100 opacity-0 text-center bg-blue-700 rounded-full w-10 h-10`}>q1</div>
                            <div className={`  transition-all duration-500 ease-in-out opacity-100 opacity-0 text-center bg-blue-700 rounded-full w-10 h-10`}>q2</div>
                            <div className={`  transition-all duration-500 ease-in-out opacity-100 opacity-0 text-center bg-blue-700 rounded-full w-10 h-10`}>q3</div>
                            <div className={`  border-4 border-double border-black transition-all duration-500 ease-in-out opacity-100 opacity-0 text-center bg-blue-700 rounded-full w-10 h-10`}>q4</div>

                        </div>
                        {/* Flechas (Aristas) */}
                        {/* <svg className="absolute left-5 top-2 h-10 w-40">
                                <line x1="10" y1="0" x2="130" y2="0" stroke="red" strokeWidth="2" className='opacity-100 opacity-0'/>
                                <polyline points="125,0 120,-5 130,0 120,5" stroke="red" strokeWidth="2" fill="none" className='opacity-100 opacity-0'/>
                            </svg>
                            <svg className="absolute left-17 top-2 h-10 w-40">
                                <line x1="10" y1="0" x2="130" y2="0" stroke="red" strokeWidth="2" className='opacity-100 opacity-0'/>
                                <polyline points="125,0 120,-5 130,0 120,5" stroke="red" strokeWidth="2" fill="none" className='opacity-100 opacity-0'/>
                            </svg>
                            <svg className="absolute left-29 top-2 h-10 w-40">
                                <line x1="10" y1="0" x2="130" y2="0" stroke="red" strokeWidth="2" className='opacity-100 opacity-0'/>
                                <polyline points="125,0 120,-5 130,0 120,5" stroke="red" strokeWidth="2" fill="none" className='opacity-100 opacity-0'/>
                            </svg>
                            <svg className="absolute left-41 top-2 h-10 w-40">
                                <line x1="10" y1="0" x2="130" y2="0" stroke="red" strokeWidth="2" className='opacity-100 opacity-0'/>
                                <polyline points="125,0 120,-5 130,0 120,5" stroke="red" strokeWidth="2" fill="none" className='opacity-100 opacity-0'/>
                            </svg> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Af;
