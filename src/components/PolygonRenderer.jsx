import React from 'react';
import PropTypes from 'prop-types';

// Renders a polygon based on its vertices
const PolygonRenderer = ({ x, y, z, vertices, color }) => {
  // Convert vertices to a string of points for the polygon element
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
  x: PropTypes.number.isRequired, // X-offset for the polygon
  y: PropTypes.number.isRequired, // Y-offset for the polygon
  z: PropTypes.number, // Z-index for stacking order
  vertices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired, // Array of vertex coordinates
  color: PropTypes.string.isRequired, // Color of the polygon
};

export default PolygonRenderer;