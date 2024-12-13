import React from 'react';
import PropTypes from 'prop-types';

// Sidebar component for file upload functionality
const LeftMenu = ({ onFileOpen }) => {
  const handleButtonClick = () => {
    // Simulates a click on the hidden file input
    document.getElementById('file-input-left-menu').click();
  };

  return (
    <aside className="left-menu">
      {/* Button to upload a shape file */}
      <button className="button" onClick={handleButtonClick}>
        Open Shape File
      </button>

      {/* Hidden file input for file selection */}
      <input
        type="file"
        id="file-input-left-menu"
        style={{ display: 'none' }}
        onChange={onFileOpen}
      />
    </aside>
  );
};

LeftMenu.propTypes = {
  onFileOpen: PropTypes.func.isRequired, // Function to handle file upload
};

export default LeftMenu;