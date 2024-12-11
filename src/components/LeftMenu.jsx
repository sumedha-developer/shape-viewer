import React from 'react';
import PropTypes from 'prop-types';

const LeftMenu = ({ onFileOpen }) => {
  const handleButtonClick = () => {
    // Programmatically trigger the file input click
    document.getElementById('file-input-left-menu').click();
  };

  return (
    <aside className="left-menu">
      <button onClick={handleButtonClick}>Open Shape File</button>
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
  onFileOpen: PropTypes.func.isRequired, // Expects a file open handler
};

export default LeftMenu;