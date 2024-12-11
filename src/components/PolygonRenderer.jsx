import React from 'react';
import PropTypes from 'prop-types';

/**
 * PolygonRenderer Component
 * Renders a polygon using an SVG element.
 */
const PolygonRenderer = ({ x, y, z, vertices, color }) => {
  // Calculate the absolute position of each vertex
  const points = vertices
    .map(([vx, vy]) => `${vx + x},${vy + y}`) // Offset vertices by x and y
    .join(' '); // Convert to SVG-compatible points string

  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: z,
        overflow: 'visible', // Ensure the polygon renders correctly
      }}
    >
      <polygon points={points} fill={`#${color}`} />
    </svg>
  );
};

PolygonRenderer.propTypes = {
  x: PropTypes.number.isRequired, // x offset for the polygon
  y: PropTypes.number.isRequired, // y offset for the polygon
  z: PropTypes.number, // z-index of the polygon
  vertices: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number) // Array of [x, y] coordinates
  ).isRequired,
  color: PropTypes.string.isRequired, // Fill color of the polygon
};

export default PolygonRenderer;