import React from 'react';
import './NeonHex.css'; // Make sure to import the corresponding CSS file

const NeonHex = () => {
  return (
    <div className="hexContainer">
      <div className="hexintcontainer">
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="pole"><div></div><div></div><div></div><div></div></div>
        <div className="neon neon_a"><div></div><div></div><div></div><div></div></div>
        <div className="neon neon_b"><div></div><div></div><div></div><div></div></div>
        <div className="neon neon_c"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default NeonHex;
