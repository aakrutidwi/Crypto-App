import React from 'react';

const Roadmap = () => {
  return (
    <>
      <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50,300 C150,100 350,100 450,300"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>
      <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50,100 C50,200 450,200 450,100"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>
    </>
  );
};

export default Roadmap;
