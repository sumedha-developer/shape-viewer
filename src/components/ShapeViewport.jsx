import React from 'react';
import PropTypes from 'prop-types';
import ShapeRenderer from './ShapeRenderer';

// Main display area for rendering shapes
const ShapeViewport = ({ shapes }) => {
  return (
    <main className="shape-viewport">
      {/* Render each shape using the ShapeRenderer component */}
      {shapes.map((shape, index) => (
        <ShapeRenderer key={index} shape={shape} />
      ))}
    </main>
  );
};

ShapeViewport.propTypes = {
  shapes: PropTypes.array.isRequired, // Array of shape objects to be rendered
};

export default ShapeViewport;