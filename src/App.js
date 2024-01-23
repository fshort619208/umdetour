import React, { useState } from "react";
import "./App.css";

function App() {
  const pointsDataBlue = [
    { x: 184, y: 188, label: 'Point' },
    { x: 205, y: 194, label: 'Point' },
    { x: 232, y: 262, label: 'Point' },
    { x: 192, y: 265, label: 'Point' },
    { x: 152, y: 282, label: 'Point' },
    { x: 118, y: 330, label: 'Point' },
    { x: 113, y: 310, label: 'Point' },
    { x: 112, y: 352, label: 'Point' },
    { x: 255, y: 244, label: 'Point' },
    { x: 308, y: 258, label: 'Point' },
    { x: 356, y: 260, label: 'Point' },
    { x: 410, y: 281, label: 'Point' },
    { x: 412, y: 300, label: 'Point' },
    { x: 435, y: 254, label: 'Point' },
    { x: 464, y: 246, label: 'Point' },
    { x: 562, y: 210, label: 'Point' },
    { x: 566, y: 194, label: 'Point' },
    { x: 564, y: 186, label: 'Point' },
    { x: 547, y: 150, label: 'Point' },
    { x: 542, y: 117, label: 'Point' },
    { x: 542, y: 105, label: 'Point' },
    { x: 390, y: 108, label: 'Point' },
    { x: 390, y: 116, label: 'Point' },
    { x: 342, y: 93, label: 'Point' },
    { x: 181, y: 86, label: 'Point' },
    { x: 391, y: 161, label: 'Point' },
    { x: 388, y: 169, label: 'Point' },
    { x: 543, y: 65, label: 'Point' },
  ];
  const pointsDataRed = [
    { x: 240, y: 260, label: 'Red' },
    { x: 390, y: 255, label: 'Red' },
    { x: 100, y: 280, label: 'Red' },
    { x: 60, y: 280, label: 'Red' },
    
  ];

  const handleButtonClickBlue = (Point) => {
    alert(`Currently Open :)`);
  };
  const handleButtonClickRed = (Red) => {
    alert(`Currently Blocked :(`);
  };

  const pointStyleBlue = {
    width: '10px',
    height: '10px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    position: 'absolute',
    cursor: 'pointer', 
  }
  const pointStyleRed = {
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    cursor: 'pointer', 
  }

  return (
    <div style = {{ 
      fontFamily: 'inherit',
      color: '#FFFFFF',
      backgroundColor: '#FF0000',
      height: '100vh',
      minHeight:'100vh',
    }}>
      <img
        src={`${process.env.PUBLIC_URL}/images/mapp.jpg`}
        alt="Map"
        style={{ position: 'absolute', width: '610px', height: '389px' }}
        />
        {pointsDataBlue.map((point, index) => (
          <button
            key={index}
            style={{
              ...pointStyleBlue,
              left: `${point.x}px`,
              top: `${point.y}px`,
            }}
            onClick={() => handleButtonClickBlue(point.label)}
          />
        ))}
        {pointsDataRed.map((point, index) => (
          <button
            key={index}
            style={{
              ...pointStyleRed,
              left: `${point.x}px`,
              top: `${point.y}px`,
            }}
            onClick={() => handleButtonClickRed(point.label)}
          />
        ))}

    </div>
    
  );
}

export default App;
