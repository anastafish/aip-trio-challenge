import { useState } from 'react';
import Square from './Square';
import Lamp from './Lamp';

const Grid = ({ rows, cols }) => {
  // Track the state of squares
  const [gridState, setGridState] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false))
  );

  // Toggle the light for four squares around a lamp
  const toggleLamp = (row, col) => {
    const updatedGrid = gridState.map((r, i) =>
      r.map((isLit, j) => {
        if (
          (i === row && j === col) || // Top-left
          (i === row + 1 && j === col) || // Bottom-left
          (i === row && j === col + 1) || // Top-right
          (i === row + 1 && j === col + 1) // Bottom-right
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

      {/* Place lamps in between squares */}
      {Array.from({ length: rows - 1 }).map((_, rowIndex) =>
        Array.from({ length: cols - 1 }).map((_, colIndex) => (
          <Lamp
            key={`lamp-${rowIndex}-${colIndex}`}
            toggleLamp={() => toggleLamp(rowIndex, colIndex)}
            style={{
              position: 'absolute',
              top: `${(rowIndex + 1) * 80 - 15}px`, // Center lamp vertically
              left: `${(colIndex + 1) * 80 - 15}px`, // Center lamp horizontally
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
