import React from 'react';
import PropTypes from 'prop-types';

const LeftMenu = ({ shapeFileName, onFileUpload }) => {
  return (
    <aside className="left-menu">
      <button>
        {shapeFileName || (
          <label>
            Open Shape File
            <input type="file" onChange={onFileUpload} hidden />
          </label>
        )}
      </button>
    </aside>
  );
};

LeftMenu.propTypes = {
  shapeFileName: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired,
};

export default LeftMenu;