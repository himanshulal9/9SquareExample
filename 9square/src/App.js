import React, { useState } from 'react';
import NineSquare from './9square';

const App = () => {
  const [gridNumber, setGridNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`gridNumber: ${gridNumber} `);
    // Add logic to handle login here
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="gridNumber">GridNumber:</label>
          <input
            placeholder="Digit between 1 to 9"
            type="text"
            id="gridNumber"
            value={gridNumber}
            onChange={(event) => setGridNumber(event.target.value)}
          />
          <button type="submit" style={{ marginLeft: '5px' }}>
            Generate
          </button>
        </div>
      </form>

      <h5>Generated Rows</h5>
      <NineSquare number={gridNumber} />
    </div>
  );
};

export default App;
