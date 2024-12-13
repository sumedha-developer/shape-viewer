import React, { useState } from 'react';
import TopToolbar from './components/TopToolbar';
import LeftMenu from './components/LeftMenu';
import ShapeViewport from './components/ShapeViewport';
import { parseShapeFile } from './utils/parseShapeFile';
import './styles/App.css';

// Main application component
const App = () => {
  // State to store shape data, the uploaded file name, and any error messages
  const [shapes, setShapes] = useState([]);
  const [shapeFileName, setShapeFileName] = useState(null);
  const [error, setError] = useState(null);

  // Handles the file upload event and validates/parses the file content
  const handleFileOpen = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file extension (should end with .shapefile)
      if (!file.name.endsWith('.shapefile')) {
        setError('Unsupported file format. Please upload a .shapefile format.');
        return;
      }

      setError(null); // Clear any previous errors
      setShapeFileName(file.name); // Store the uploaded file name
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result; // Read the file content as text
        try {
          const parsedShapes = parseShapeFile(content); // Parse the content into shapes
          // Check for unsupported shapes
          for (const shape of parsedShapes) {
            if (!['Rectangle', 'Triangle', 'Polygon'].includes(shape.type)) {
              throw new Error(
                `Unsupported shape found: ${shape.type}. Supported shapes are Rectangle, Triangle, and Polygon.`
              );
            }
          }
          setShapes(parsedShapes); // Update state with parsed shape data
        } catch (parseError) {
          setError(parseError.message); // Set error message for parsing/validation issues
        }
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

      {/* Error message display */}
      {error && <div className="error-message">{error}</div>}

      {/* Viewport area where shapes are rendered */}
      <ShapeViewport shapes={shapes} />
    </div>
  );
};

export default App;