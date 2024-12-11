export const parseShapeFile = (content) => {
  return content
    .split('\n')
    .map((line) => {
      const lastSemicolonIndex = line.lastIndexOf(';');
      if (lastSemicolonIndex === -1) return null;
      const cleanedLine = line.substring(0, lastSemicolonIndex).trim();
      if (!cleanedLine) return null;
      const type = cleanedLine.split(',')[0];
      if (type === 'Polygon') {
        const parts = cleanedLine.split(", ");
        const type = parts[0];
        const x = parseInt(parts[1]);
        const y = parseInt(parts[2]);
        const z = parseInt(parts[3]);
        const verticesStr = parts[4].slice(1, -1);
        const color = parts[5];
        const vertices = verticesStr.split(";").map(vertex => vertex.split(",").map(Number));
        return {
          type,
          x: +x,
          y: +y,
          z: +z,
          vertices,
          color: color
        };
      } else {
        const parts = cleanedLine.split(',').map((val) => val.trim());
        const [type, x, y, z, widthOrVertices, heightOrColor, color] = parts;
        return {
          type,
          x: +x,
          y: +y,
          z: +z,
          width: +widthOrVertices,
          height: +heightOrColor,
          color,
        };
      }
    })
    .filter(Boolean);
};