export const parseShapeFile = (content) => {
  return content
    .split(';') // Split shapes by semicolon delimiter
    .map((line) => {
      // Remove comments (anything after `//`) and trim whitespace
      const cleanedLine = line.split('//')[0].trim();
      if (!cleanedLine) return null; // Ignore empty or comment-only lines

      const parts = cleanedLine.split(',').map((val) => val.trim());
      const [type, x, y, z, widthOrVertices, heightOrColor, color] = parts;

      if (type === 'Polygon') {
        // For polygons, extract vertices from the `widthOrVertices` field
        const vertices = widthOrVertices
          .replace(/"/g, '') // Remove quotes around the vertices string
          .split(';')        // Split by semicolons into coordinate pairs
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
    .filter(Boolean); // Remove any nulls (empty or comment-only lines)
};