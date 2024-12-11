export const parseShapeFile = (content) => {
  return content.split(';').filter(Boolean).map((line) => {
    const parts = line.split(',').map((val) => val.trim());
    const [type, x, y, z, widthOrVertices, heightOrColor, color] = parts;

    if (type === 'Polygon') {
      const vertices = widthOrVertices
        .replace(/"/g, '') // Remove quotes
        .split(';')        // Split into coordinate pairs
        .map((coord) => coord.split(',').map(Number)); // Convert to [x, y]
      return { type, x: +x, y: +y, z: +z, vertices, color: heightOrColor };
    }

    return {
      type,
      x: +x,
      y: +y,
      z: +z,
      width: +widthOrVertices,
      height: +heightOrColor,
      color,
    };
  });
};