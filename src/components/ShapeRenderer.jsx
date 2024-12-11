import React from 'react';
import PropTypes from 'prop-types';

/**
 * ShapeRenderer Component
 * Handles rendering of different shapes (Rectangle, Triangle, Polygon).
 */
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
    const borderStyle = {
      position: 'absolute',
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      width: 0,
      height: 0,
      borderLeft: `${shape.width / 2}px solid transparent`,
      borderRight: `${shape.width / 2}px solid transparent`,
      borderBottom: `${shape.height}px solid #${shape.color}`,
      zIndex: shape.z,
    };
    return <div style={borderStyle}></div>;
  }

  if (shape.type === 'Polygon') {
    const points = shape.vertices
      .map(([x, y]) => `${x + shape.x},${y + shape.y}`)
      .join(' ');
    return (
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: shape.z,
          overflow: 'visible',
        }}
      >
        <polygon points={points} fill={`#${shape.color}`} />
      </svg>
    );
  }

  return null; // For unsupported shapes
};

ShapeRenderer.propTypes = {
  shape: PropTypes.shape({
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string.isRequired,
    vertices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), // Only for Polygon
  }),
};

export default ShapeRenderer;