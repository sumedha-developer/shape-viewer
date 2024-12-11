import React from 'react';
import PropTypes from 'prop-types';
import PolygonRenderer from './PolygonRenderer';

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

  return null;
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
    vertices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  }).isRequired,
};

export default ShapeRenderer;