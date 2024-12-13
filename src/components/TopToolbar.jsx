import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';

// Component for the top toolbar, including branding and file upload functionality
const TopToolbar = ({ shapeFileName, onFileUpload }) => {
  return (
    <header className="top-toolbar">
      {/* Application logo and title */}
      <h1 style={{ margin: 0 }}>
        <img src={Logo} alt="logo" className="logo" /> Shape Viewer
      </h1>

      {/* Button to upload a shape file */}
      <button className="button">
        {shapeFileName || ( // Display the file name if uploaded, otherwise show upload prompt
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
  shapeFileName: PropTypes.string, // The name of the uploaded file
  onFileUpload: PropTypes.func.isRequired, // Function to handle file upload
};

export default TopToolbar;