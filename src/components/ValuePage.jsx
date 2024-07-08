import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import valueTexts from './Data'; 
import valuebg from '../img/solution-bg.jpg';
import '../fonts.css';
import '../App.css';
import valueAnswer from './AnswersData';
import Answer from './Answer';

const ValuePage = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { category, value } = useParams();
  const navigate = useNavigate();

  const key = `${category}-${value}`;
  const text = valueTexts[key] || 'No text available for this category and value.';
  const answer = valueAnswer[key] || 'No text available for this category and value.';

  const handleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="value-page flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${valuebg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="text-center mt-10">
        <h1 className="text-6xl font-bold text-yellow-600" style={{ fontFamily: 'monkey, sans-serif', fontWeight: 'bold', lineHeight: '0' }}>
          Category: {category}
        </h1>
        <h2 className="text-5xl font-bold text-yellow-600" style={{ fontFamily: 'monkey, sans-serif', fontWeight: 'bold', lineHeight: '3' }}>
          Value: {value}
        </h2>
      </div>
      <p className="text-3xl font-bold text-yellow-400 text-center mt-4" style={{ fontFamily: 'monkey, sans-serif', fontWeight: 'bold', lineHeight: '3' }}>
        {text}
      </p>
      <div className="flex mb-10 mt-6">
        <button
          className="mt-4 px-4 py-2 m-2 bg-blue-700 hover:bg-blue-500 text-white rounded font-bold"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="mt-4 px-4 py-2 m-2 bg-red-700 hover:bg-red-500 text-white rounded font-bold"
          onClick={handleAnswer}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
      {showAnswer && <Answer answer={answer} />}
    </div>
  );
};

export default ValuePage;
