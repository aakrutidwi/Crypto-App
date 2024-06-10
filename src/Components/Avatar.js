import React from 'react';
import './Avatar.css'; // Create a CSS file for styling the avatar

const colorMap = {
    A: '#FF5733', B: '#33FF57', C: '#3357FF', D: '#FF33A1', E: '#33FFA5', 
    F: '#FF5733', G: '#3357FF', H: '#FF33A1', I: '#33FFA5', J: '#FF5733', 
    K: '#33FF57', L: '#3357FF', M: '#FF33A1', N: '#33FFA5', O: '#FF5733', 
    P: '#33FF57', Q: '#3357FF', R: '#FF33A1', S: '#33FFA5', T: '#FF5733', 
    U: '#33FF57', V: '#3357FF', W: '#FF33A1', X: '#33FFA5', Y: '#FF5733', 
    Z: '#33FF57'
  };



const Avatar = ({ name }) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const backgroundColor = colorMap[firstLetter] || '#000';
  return (
    <div className="avatar" style={{ backgroundColor }}>
      {firstLetter}
    </div>
  );
};

export default Avatar;
