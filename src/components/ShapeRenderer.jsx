import React from 'react';

const ShapeRenderer = ({ shape }) => {
  if (shape.type === 'Rectangle') {
    return (
      <div
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
    );
  }

  if (shape.type === 'Triangle') {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${shape.x}px`,
          top: `${shape.y}px`,
          width: '0',
          height: '0',
          borderLeft: `${shape.width / 2}px solid transparent`,
          borderRight: `${shape.width / 2}px solid transparent`,
          borderBottom: `${shape.height}px solid #${shape.color}`,
          zIndex: shape.z,
        }}
      ></div>
    );
  }

  return null;
};

export default ShapeRenderer;