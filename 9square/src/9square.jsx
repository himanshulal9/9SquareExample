import React from 'react';

function NineSquare({ number }) {
  const rows = [];

  // create rows
  for (let i = 0; i < number; i++) {
    const cols = [];

    // create columns
    for (let j = 0; j < number; j++) {
      cols.push(<div key={j} className="column"></div>);
    }

    rows.push(
      <div key={i} className="row">
        {cols}
      </div>
    );
  }

  return <div className="matrix-grid">{rows}</div>;
}

export default NineSquare;
