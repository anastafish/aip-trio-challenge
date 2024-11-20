const Lamp = ({ toggleLamp, style }) => {
  return (
    <div
      onClick={toggleLamp}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        border: '2px solid #999',
        cursor: 'pointer',
        boxShadow: '0 0 10px 2px yellow',
        ...style, 
      }}
    />
  );
};

export default Lamp;
