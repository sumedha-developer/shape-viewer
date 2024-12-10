import React from 'react';
import PropTypes from 'prop-types';

const ShapeViewport = ({ shapes }) => {
  return (
    <main className="shape-viewport">
      {shapes.map((shape, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            width: `${shape.width}px`,
            height: `${shape.height}px`,
            backgroundColor: `#${shape.color}`,
            zIndex: shape.z,
          }}
        ></div>
      ))}
    </main>
  );
};

ShapeViewport.propTypes = {
  shapes: PropTypes.array.isRequired,
};

export default ShapeViewport;