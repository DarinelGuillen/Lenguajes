import React, { useState } from 'react';

function Af() {
    const [input, setInput] = useState('');
    const q0Toq1 = input.startsWith('1');
    const q1Toq2 = input.startsWith('11');
    const q2Toq3 = input.startsWith('110');
    const q3Toq4 = input === '1101';

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="flex w-full bg-gray-800 h-screen items-center justify-center">
                <div className="flex w-full p-9 flex-col items-center justify-center">
                    <label htmlFor="text" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                        Introduce la Cadena "1101"
                    </label>
                    <input
                        type="text"
                        className="m-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={input}
                        onChange={handleChange}
                        placeholder="1101"
                    />
                    <div className="bg-gray-700 w-full h-80 flex items-center justify-center space-x-5">
                        {/* Estados y transiciones */}
                        <State visible={q0Toq1} label="q0" />
                        <Arrow visible={q0Toq1} label="1" />
                        <State visible={q0Toq1} label="q1" />
                        <Arrow visible={q1Toq2} label="1" />
                        <State visible={q1Toq2} label="q2" />
                        <Arrow visible={q2Toq3} label="0" />
                        <State visible={q2Toq3} label="q3" />
                        <Arrow visible={q3Toq4} label="1" />

                        <State visible={q3Toq4} label="q4" finalState={q3Toq4} />
                    </div>
                </div>
            </div>
        </>
    );
}

// Componente para las flechas con animación
function Arrow({ visible, label }) {
    return (
        <div className={`relative ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}>
            <svg className="h-10 w-16">
                <line x1="0" y1="5" x2="40" y2="5" stroke="red" strokeWidth="2" />
                <polyline points="35,0 40,5 35,10" stroke="red" strokeWidth="2" fill="none" />
            </svg>
            <span className="absolute -top-3 left-5 text-white">{label}</span>
        </div>
    );
}

// Componente para los estados con animación
function State({ visible, label, finalState }) {
    return (
        <div className={`relative flex items-center justify-center text-center rounded-full w-10 h-10 transition-opacity duration-700 ease-in ${visible ? 'opacity-100' : 'opacity-0'} ${finalState ? 'border-4 border-double border-black' : ''} bg-blue-700`}>
            {label}
        </div>
    );
}

export default Af;
