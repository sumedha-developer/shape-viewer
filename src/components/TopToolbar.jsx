import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';

const TopToolbar = ({ shapeFileName, onFileUpload }) => {
  return (
    <header className="top-toolbar">
      <h1 style={{ margin: 0 }}><img src={Logo} alt="logo" className="logo" /> Shape Viewer</h1>
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