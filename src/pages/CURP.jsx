import React, { useState } from 'react';
import QRCode from "react-qr-code";
import '../assets/css/CURP.css'


function CURP() {
  const [verificationCode, setVerificationCode] = useState('');
  const [randomCode, setRandomCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [generatedCURP, setGeneratedCURP] = useState('');

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

    if (verification !== randomCode.toString()) {
      alert('Incorrect verification code.');
      return;
    }

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

  function downloadFile(curp) {
    const element = document.createElement("a");
    const file = new Blob([curp], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "curp.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

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
    const generatedCURP = firstLetterLastName + secondVowelLastName + firstLetterSecondLastName + firstLetterFirstName + birthDate + genderUpperCase + abbreviatedBirthPlace + secondConsonantLastName + secondConsonantSecondLastName + firstConsonantFirstName + "XX";

    return generatedCURP;
  };

  return (
    <>
      <div className='container'>
        <div className='containerform'>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <p className="title">Enter your information</p>
              <label>
                <input className="input" type="text" placeholder="First Name" required="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </label>
              <label>
                <input className="input" type="text" placeholder="Middle Name (optional)" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </label>
              <label>
                <input className="input" type="text" placeholder="Last Name" required="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </label>
              <label>
                <input className="input" type="text" placeholder="Second Last Name" required="" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} />
              </label>
            </div>
            <div className="flexdate">
              <div>
                <label>
                  <input className="input" type="number" placeholder="Day of birth" maxLength="2" required="" value={day} onChange={handleDayChange} />
                </label>
              </div>
              <div>
                <label>
                  <input className="input" type="number" placeholder="Month of birth" maxLength="2" required="" value={month} onChange={handleMonthChange} />
                </label>
              </div>
              <div>
                <label>
                  <input className="input" type="number" placeholder="Year of birth" maxLength="4" required="" value={year} onChange={handleYearChange} />
                </label>
              </div>
            </div>
            <label>
              <select className="input" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Gender</option>
                <option value="H">Male</option>
                <option value="M">Female</option>
              </select>
            </label>
            <label>
            <select className="input" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)}>
                <option value="">Select your birth place</option>
                <option value="AS">Aguascalientes</option>
                <option value="BC">Baja California</option>
                <option value="BS">Baja California Sur</option>
                <option value="CC">Campeche</option>
                <option value="CS">Chiapas</option>
                <option value="CH">Chihuahua</option>
                <option value="CL">Coahuila</option>
                <option value="CM">Colima</option>
                <option value="DF">Mexico City</option>
                <option value="DG">Durango</option>
                <option value="GT">Guanajuato</option>
                <option value="GR">Guerrero</option>
                <option value="HG">Hidalgo</option>
                <option value="JC">Jalisco</option>
                <option value="MC">State of Mexico</option>
                <option value="MN">Michoacán</option>
                <option value="MS">Morelos</option>
                <option value="NT">Nayarit</option>
                <option value="NL">Nuevo León</option>
                <option value="OC">Oaxaca</option>
                <option value="PL">Puebla</option>
                <option value="QT">Querétaro</option>
                <option value="QR">Quintana Roo</option>
                <option value="SP">San Luis Potosí</option>
                <option value="SL">Sinaloa</option>
                <option value="SR">Sonora</option>
                <option value="TC">Tabasco</option>
                <option value="TS">Tamaulipas</option>
                <option value="TL">Tlaxcala</option>
                <option value="VZ">Veracruz</option>
                <option value="YN">Yucatán</option>
                <option value="ZS">Zacatecas</option>
              </select>
            </label>
            <div className='flex'>
              <div>
                <button className="generationcode" type="button" onClick={handleRandomCodeGeneration}> Generate code</button>
                <span>{randomCode}</span>
              </div>
              <div>
              <input
                className="input"
                type="text"
                placeholder="Verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}/>
              </div>
            </div>
            <button className="generation" type="submit">Generate CURP</button>
          </form>
        </div>
        <div className='info'>
          {generatedCURP && (
            <div className='curp'>
              <p>Applicant's CURP data:</p>
              <p>First Name(s): {firstName} {middleName}</p>
              <p>Last Name: {lastName}</p>
              <p>Second Last Name: {secondLastName}</p>
              <p>Gender: {gender}</p>
              <p>Date of Birth: {day}/{month}/{year}</p>
              <p>Birth Place: {birthPlace}</p>
              <p>CURP: {generatedCURP}</p>
                   <QRCode value={generatedCURP} size={90}/>
                   <div>
                    <button className="generationQR" onClick={() => downloadFile(generatedCURP)}>
                      Download CURP
                    </button>
                    </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CURP;
