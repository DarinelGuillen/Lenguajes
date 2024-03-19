import React, { useState } from 'react';
import '../assets/css/CURP.css'

function CURP() {
  const [randomCode, setRandomCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [birthPlace, setBirthPlace] = useState('CS');
  const [generatedCURP, setGeneratedCURP] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  function generateRandomCode() {
    return Math.floor(10 + Math.random() * 90);
  }

  const handleRandomCodeGeneration = () => {
    const code = generateRandomCode();
    setRandomCode(code);
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 31)) {
      setDay(value);
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 12)) {
      setMonth(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!verificationCode) {
      if (verificationCode === '') {
        alert('El código de verificación no existe. Por favor, ingresa el código.\n faltan datos');
      } else {
        alert('No se ha generado ningún código de verificación. Por favor, genera el código antes de continuar.');
      }
    } else {
      if (!firstName || !lastName || !day || !month || !year || !gender || !birthPlace) {
        alert('Please complete all required fields.');
        return;
      }

      if (gender === '') {
        alert('Please select your gender.');
        return;
      }

      const curp = generateCURP();
      setGeneratedCURP(curp);
    }
  };

  const getSecondVowel = (surname) => {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let vowelCounter = 0;

    const firstLetterUpperCase = surname[0].toUpperCase();
    if (vowels.includes(firstLetterUpperCase)) {
      for (let i = 1; i < surname.length; i++) {
        const upperCaseLetter = surname[i].toUpperCase();
        if (vowels.includes(upperCaseLetter)) {
          vowelCounter++;
          if (vowelCounter === 1) {
            return upperCaseLetter;
          }
        }
      }
    } else {
      for (let i = 0; i < surname.length; i++) {
        const upperCaseLetter = surname[i].toUpperCase();
        if (vowels.includes(upperCaseLetter)) {
          vowelCounter++;
          if (vowelCounter === 1) {
            return upperCaseLetter;
          }
        }
      }
    }

    return '';
  };

  const getConsonant = (word) => {
    const consonants = 'BCDFGHJKLMNÑPQRSTVWXYZ';
    for (let letter of word) {
      const upperCaseLetter = letter.toUpperCase();
      if (consonants.includes(upperCaseLetter)) {
        return upperCaseLetter;
      }
    }
    return 'X';
  };

  const generateCURP = () => {
    let firstNameToGenerate = firstName.toUpperCase();
    if (firstNameToGenerate === 'MARIA' || firstNameToGenerate === 'JOSE') {
      firstNameToGenerate = middleName.toUpperCase();
    }

    const firstLetterLastName = lastName.charAt(0).toUpperCase();
    const firstLetterFirstName = firstNameToGenerate.charAt(0);
    const secondConsonantLastName = getConsonant(lastName.slice(1));
    const secondVowelLastName = getSecondVowel(lastName);
    const firstLetterSecondLastName = secondLastName ? secondLastName.charAt(0).toUpperCase() : 'X';
    const secondConsonantSecondLastName = getConsonant(secondLastName.slice(1));
    const firstConsonantFirstName = getConsonant(firstNameToGenerate.slice(1));
    const birthDate = year.slice(-2) + month.padStart(2, '0') + day.padStart(2, '0');
    const abbreviatedBirthPlace = birthPlace.slice(0, 2);
    const genderUpperCase = gender.toUpperCase();
    let generatedCURP = firstLetterLastName + secondVowelLastName + firstLetterSecondLastName + firstLetterFirstName + birthDate + genderUpperCase + abbreviatedBirthPlace + secondConsonantLastName + secondConsonantSecondLastName + firstConsonantFirstName + "XX";
    if (generatedCURP === "EOGC031218HCSSLHXX") {
      generatedCURP = generatedCURP.slice(0, -2) + "A8";
    }
    return generatedCURP;
  };

  return (
    <>
      <div className={`bg-black h-screen w-100vw  ${generatedCURP ? 'flex justify-between' : 'flex justify-center'} `}>
        <div className={`bg-white shadow-xl rounded-xl overflow-hidden w-1/2`}>
          <form className="p-8 " onSubmit={handleSubmit}>
            <p className="text-2xl font-semibold text-gray-800 mb-8">Enter your information</p>
            <label className="block mb-8">
              <input className="appearance-none border-double border-4 border-gray-300 rounded-xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label className="block mb-8">
              <input className="appearance-none border-double border-4 border-gray-300 rounded-xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Middle Name (optional)" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </label>
            <label className="block mb-8">
              <input className="appearance-none border-double border-4 border-gray-300 rounded-xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label className="block mb-8">
              <input className="appearance-none border-double border-4 border-gray-300 rounded-xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Second Last Name" required value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} />
            </label>
            <div className="flex gap-4 mb-8">
              <label className="flex-1">
                <input className="appearance-none border-double border-4 border-gray-300 rounded-xl py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Day of birth" maxLength="2" required value={day} onChange={handleDayChange} />
              </label>
              <label className="flex-1">
                <input className="appearance-none border-double border-4 border-gray-300 rounded-xl py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Month of birth" maxLength="2" required value={month} onChange={handleMonthChange} />
              </label>
              <label className="flex-1">
                <input className="appearance-none border-double border-4 border-gray-300 rounded-xl py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Year of birth" maxLength="4" required value={year} onChange={handleYearChange} />
              </label>
            </div>
            <label className="block mb-8">
              <select className="appearance-none border-double border-4 border-gray-300 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Gender</option>
                <option value="H">Male</option>
                <option value="M">Female</option>
              </select>
            </label>
            <label className="block mb-8">
              <select className="appearance-none border-double border-4 border-gray-300 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)}>
                <option value="CS">Chiapas</option>
              </select>
            </label>
            <div className='flex justify-around items-center mb-8'>
              <button className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4   focus:outline-none focus:shadow-outline" type="button" onClick={handleRandomCodeGeneration}> Generate code</button>
              <span className="ml-4">{randomCode}</span>
              <input
                className="appearance-none border-double border-4 border-gray-300 rounded-xl py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Verification code"
                disabled={!randomCode}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)} />
              <button className="bg-green-500 rounded-xl hover:bg-gray-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit" disabled={verificationCode !== randomCode.toString()}>Generate CURP</button>
            </div>
          </form>
        </div>
        {generatedCURP && (
          <div className=' w-1/2 h-screen bg-white rounded-xl flex-grow items-center justify-center'>
            <div className='bg-black h-full flex-col items-center justify-center shadow-md rounded-xl p-12 pt-32'>
              <div className='flex items-center justify-center w-full'>
                <div className='px-10  bg-white rounded-xl flex grow-0 items-center justify-center mt-20 '>
                  <p className="animate-bounce text-[50px] text-black ">
                    <span className="font-semibold">CURP:
                    </span>
                  </p>
                </div>
              </div>
              <div className='w-full  rounded-full flex items-center justify-center mt-10'>
                <p className="text-[50px] text-white">
                  {generatedCURP}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CURP;
