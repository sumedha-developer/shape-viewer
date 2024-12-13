import React from 'react';
import PropTypes from 'prop-types';
import PolygonRenderer from './PolygonRenderer';

// Renders individual shapes based on their type
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
    const triangleStyle = {
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
    return <div style={triangleStyle}></div>;
  }

  if (shape.type === 'Polygon') {
    return <PolygonRenderer {...shape} />;
  }

  return null; // Return null if the shape type is unrecognized
};

ShapeRenderer.propTypes = {
  shape: PropTypes.shape({
    type: PropTypes.string.isRequired, // Type of the shape
    x: PropTypes.number.isRequired, // X-coordinate position
    y: PropTypes.number.isRequired, // Y-coordinate position
    z: PropTypes.number, // Z-index for stacking order
    width: PropTypes.number, // Width of the shape
    height: PropTypes.number, // Height of the shape
    color: PropTypes.string.isRequired, // Color of the shape
    vertices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), // For polygons
  }).isRequired,
};

export default ShapeRenderer;