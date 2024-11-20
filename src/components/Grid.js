import { useState } from 'react';
import Square from './Square';
import Lamp from './Lamp';

const Grid = ({ rows, cols }) => {
  const [gridState, setGridState] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false))
  );

  const toggleLamp = (row, col) => {
    const updatedGrid = gridState.map((r, i) =>
      r.map((isLit, j) => {
        if (
          (i === row && j === col) || 
          (i === row + 1 && j === col) ||
          (i === row && j === col + 1) || 
          (i === row + 1 && j === col + 1) 
        ) {
          return !isLit;
        }
        return isLit;
      })
    );
    setGridState(updatedGrid);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: `${cols * 80}px`,
        height: `${rows * 80}px`,
        margin: '20px auto',
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 80px)`,
        gridTemplateColumns: `repeat(${cols}, 80px)`,
        gap: '0',
      }}
    >
      {gridState.map((row, rowIndex) =>
        row.map((isLit, colIndex) => (
          <Square
            key={`square-${rowIndex}-${colIndex}`}
            isLit={isLit}
            style={{
              gridRow: rowIndex + 1,
              gridColumn: colIndex + 1,
            }}
          />
        ))
      )}

      {Array.from({ length: rows - 1 }).map((_, rowIndex) =>
        Array.from({ length: cols - 1 }).map((_, colIndex) => (
          <Lamp
            key={`lamp-${rowIndex}-${colIndex}`}
            toggleLamp={() => toggleLamp(rowIndex, colIndex)}
            style={{
              position: 'absolute',
              top: `${(rowIndex + 1) * 80 - 15}px`, 
              left: `${(colIndex + 1) * 80 - 15}px`, 
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
