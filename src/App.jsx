import React, { useState } from 'react';
import TopToolbar from './components/TopToolbar';
import LeftMenu from './components/LeftMenu';
import ShapeViewport from './components/ShapeViewport';
import { parseShapeFile } from './utils/parseShapeFile';
import './styles/App.css';

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [shapeFileName, setShapeFileName] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setShapeFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const parsedShapes = parseShapeFile(content);
        setShapes(parsedShapes);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="app-container">
      <TopToolbar shapeFileName={shapeFileName} onFileUpload={handleFileUpload} />
      <LeftMenu />
      <ShapeViewport shapes={shapes} />
    </div>
  );
};

export default App;