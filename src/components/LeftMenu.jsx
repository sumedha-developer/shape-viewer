import React from 'react';
import PropTypes from 'prop-types';

const LeftMenu = ({ onFileOpen }) => {
  const handleButtonClick = () => {
    document.getElementById('file-input-left-menu').click();
  };

  return (
    <aside className="left-menu">
      <button className="button" onClick={handleButtonClick}>Open Shape File</button>
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
  onFileOpen: PropTypes.func.isRequired,
};

export default LeftMenu;