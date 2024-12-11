import React from 'react';
import PropTypes from 'prop-types';

const PolygonRenderer = ({ x, y, z, vertices, color }) => {

  const points = vertices
    .map(([vx, vy]) => `${vx + x},${vy + y}`)
    .join(' ');

  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: z,
        overflow: 'visible',
      }}
    >
      <polygon points={points} fill={`#${color}`} />
    </svg>
  );
};

PolygonRenderer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number,
  vertices: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  color: PropTypes.string.isRequired,
};

export default PolygonRenderer;