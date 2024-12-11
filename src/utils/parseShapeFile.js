export const parseShapeFile = (content) => {
  return content
    .split('\n') // Split shapes by newline delimiter
    .map((line) => {
      // Only process content before the last ';'
      const cleanedLine = line.split(';')[0].trim();
      if (!cleanedLine) return null; // Ignore empty or invalid lines

      const parts = cleanedLine.split(',').map((val) => val.trim());
      const [type, x, y, z, widthOrVertices, heightOrColor, color] = parts;

      if (type === 'Polygon') {
        // Parse vertices for polygons
        const vertices = widthOrVertices
          .replace(/"/g, '') // Remove quotes
          .split(';')        // Split into coordinate pairs
          .map((coord) => coord.split(',').map(Number)); // Convert each pair to [x, y]
        return { type, x: +x, y: +y, z: +z, vertices, color: heightOrColor };
      }

      // For Rectangle or Triangle
      return {
        type,
        x: +x,
        y: +y,
        z: +z,
        width: +widthOrVertices,
        height: +heightOrColor,
        color,
      };
    })
    .filter(Boolean); // Remove any nulls (empty or invalid lines)
};