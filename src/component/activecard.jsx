import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfile/activecard.css';
import divide from '../assets/images/pattern-divider-mobile.svg';
import divider from '../assets/images/pattern-divider-desktop.svg'
import dice from '../assets/images/icon-dice.svg';

const ActiveCard = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [toggled, setToggled] = useState(false);

  const fetchApi = async () => {
    try {
      const result = await axios.get('https://api.adviceslip.com/advice');
      setResponse(result.data.slip);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
    }
  };

//   useEffect(() => {
//     fetchApi();
//   }, []);

  const handleClick = () => {
    setToggled(fetchApi());
    
  };

  return (
    <>
      <div className='activecard'>
        {response && (
          <>
            <div className='header'>ADVICE # {response.id}</div>
            <div className='main_content'>{response.advice}</div>
          </>
        )}
        <div className='mid-container'>
          <div className='divider-card'>
            <img className='divide-img-mobile' src={divide} alt="Divider" />
            <img className='divide-img-desktop' src={divider} alt="Divide" />
          </div>
          <button className='dice-button' onClick={handleClick}>
            <img className='dice-img' src={dice} alt="Dice" />
          </button>
        </div>
      </div>
      {error && <div style={{ color: 'white', fontSize: '30px' }}>Error: {error}</div>}
    </>
  );
};

export default ActiveCard;
