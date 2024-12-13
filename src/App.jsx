import React, { useState } from 'react';
import TopToolbar from './components/TopToolbar';
import LeftMenu from './components/LeftMenu';
import ShapeViewport from './components/ShapeViewport';
import { parseShapeFile } from './utils/parseShapeFile';
import './styles/App.css';

// Main application component
const App = () => {
  // State to store shape data and the name of the uploaded file
  const [shapes, setShapes] = useState([]);
  const [shapeFileName, setShapeFileName] = useState(null);

  // Handles the file upload event and parses the file content
  const handleFileOpen = (event) => {
    const file = event.target.files[0];
    if (file) {
      setShapeFileName(file.name); // Store the uploaded file name
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result; // Read the file content as text
        const parsedShapes = parseShapeFile(content); // Parse the content into shapes
        setShapes(parsedShapes); // Update state with parsed shape data
      };
      reader.readAsText(file); // Initiate reading the file
    }
  };

  return (
    <div className="app-container">
      {/* Top toolbar displays the file name and provides file upload functionality */}
      <TopToolbar shapeFileName={shapeFileName} onFileUpload={handleFileOpen} />

      {/* Left menu provides an alternate file upload option */}
      <LeftMenu onFileOpen={handleFileOpen} />

      {/* Viewport area where shapes are rendered */}
      <ShapeViewport shapes={shapes} />
    </div>
  );
};

export default App;