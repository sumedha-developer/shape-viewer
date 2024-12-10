export const parseShapeFile = (content) => {
  return content.split(';').filter(Boolean).map(line => {
    const [type, x, y, z, width, height, color] = line.split(',').map(val => val.trim());
    return { type, x: +x, y: +y, z: +z, width: +width, height: +height, color };
  });
};