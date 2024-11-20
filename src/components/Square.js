const Square = ({ isLit, style }) => {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: isLit ? '#f9e076' : '#ccc',
        border: '1px solid #999',
        ...style,
      }}
    />
  );
};

export default Square;
