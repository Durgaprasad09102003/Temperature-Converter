import React, { useState } from 'react';
import './App.css';

export default function Main() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const convertData = () => {
    const numValue = parseFloat(num); // Ensure num is treated as a number
    if (value1 === value2) {
      setResult(num);
    } else if (value1 === 'Celsius') {
      if (value2 === 'Fahrenheit') {
        setResult((numValue * 9/5) + 32);
      } else if (value2 === 'Kelvin') {
        setResult(numValue + 273.15);
      }
    } else if (value1 === 'Fahrenheit') {
      if (value2 === 'Celsius') {
        setResult((numValue - 32) * 5/9);
      } else if (value2 === 'Kelvin') {
        setResult((numValue - 32) * 5/9 + 273.15);
      }
    } else if (value1 === 'Kelvin') {
      if (value2 === 'Celsius') {
        setResult(numValue - 273.15);
      } else if (value2 === 'Fahrenheit') {
        setResult((numValue - 273.15) * 9/5 + 32);
      }
    } else {
      setResult('Invalid Input');
    }
  };

  return (
    <div className='Main'>
      <h1>Temperature Converter</h1>
      
      
        <label>From:</label>
        <select name='from' id='from' value={value1} onChange={e => setValue1(e.target.value)}>
          <option value='' disabled>Select Unit</option>
          <option value='Celsius'>Celsius (°C)</option>
          <option value='Fahrenheit'>Fahrenheit (°F)</option>
          <option value='Kelvin'>Kelvin (K)</option>
        </select>
      

      
        <label>Enter Value:</label>
        <input type='number' placeholder='Enter value' value={num} onChange={e => setNum(e.target.value)} />
      

      
        <label>To:</label>
        <select name='To' id='To' value={value2} onChange={e => setValue2(e.target.value)}>
          <option value='' disabled>Select Unit</option>
          <option value='Celsius'>Celsius (°C)</option>
          <option value='Fahrenheit'>Fahrenheit (°F)</option>
          <option value='Kelvin'>Kelvin (K)</option>
        </select>
      

      <button type='button' onClick={convertData}>SUBMIT</button>

        <div className='resultbox'>
          <label>Result:</label>
          <input type="text" id='result' placeholder={value2} value={result} readOnly />
        </div>
      
    </div>
  );
}
