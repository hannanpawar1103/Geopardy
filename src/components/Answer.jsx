import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div className="text-center mx-auto">
      <p className="text-6xl font-bold text-orange-200 text-center" style={{ fontFamily: 'monkey, sans-serif', fontWeight: 'bold', lineHeight: '0' }}>
        {answer}
      </p>
    </div>
  );
};

export default Answer;

