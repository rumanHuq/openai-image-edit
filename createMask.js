//@ts-check

import sharp from 'sharp';

export function createMask() {
  const [width, height] = [1024, 1024];

  // Specify the RGBA values for the mask color
  const rgba = {
    r: 0,
    g: 0,
    b: 0,
    alpha: 0 // semi-transparent (range from 0 to 1)
  };

  // Create an RGBA buffer with the specified color
  const buffer = Buffer.alloc(width * height * 4, 0);
  for (let i = 0; i < width * height * 4; i += 4) {
    buffer[i] = rgba.r; // Red
    buffer[i + 1] = rgba.g; // Green
    buffer[i + 2] = rgba.b; // Blue
    buffer[i + 3] = Math.floor(rgba.alpha * 255); // Alpha
  }

  // Use sharp to create an image from the buffer
  sharp(buffer, {
    raw: {
      width: width,
      height: height,
      channels: 4
    }
  })
    .toFile('rgba_mask.png', (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Mask created:', info);
      }
    });
}
