export function createTextTexture(text: string, width: number, height: number, options: { 
  font?: string;
  fillStyle?: string
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}) {
    // 1. Create an offscreen canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if(!ctx) return
    // 2. Clear canvas and set typography styles
    ctx.clearRect(0, 0, width, height);
    ctx.font = options?.font || '20px Arial';
    ctx.fillStyle = options?.fillStyle || '#222222';
    ctx.textAlign = options?.textAlign || 'center';
    ctx.textBaseline = options?.textBaseline || 'middle';

    // 3. Draw the text in the exact center
    ctx.fillText(text, width / 2, height / 2);

    // 4. Convert the canvas directly to a Data URL string
    return canvas
}