import React from 'react';
import PropTypes from 'prop-types';

const TopToolbar = ({ shapeFileName, onFileUpload }) => {
  return (
    <header className="top-toolbar">
      <h1>Shape Viewer</h1>
      <button>
        {shapeFileName || (
          <label>
            Open Shape File
            <input type="file" onChange={onFileUpload} hidden />
          </label>
        )}
      </button>
    </header>
  );
};

TopToolbar.propTypes = {
  shapeFileName: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired,
};

export default TopToolbar;