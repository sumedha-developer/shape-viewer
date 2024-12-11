import React from 'react';
import PropTypes from 'prop-types';
import ShapeRenderer from './ShapeRenderer';

const ShapeViewport = ({ shapes }) => {
  return (
    <main className="shape-viewport">
      {shapes.map((shape, index) => (
        <ShapeRenderer key={index} shape={shape} />
      ))}
    </main>
  );
};

ShapeViewport.propTypes = {
  shapes: PropTypes.array.isRequired,
};

export default ShapeViewport;