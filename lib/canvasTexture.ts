import { getTextMetrics } from "./measureText";

export function createTextTexture(text: string, options: { 
  font?: string;
  fillStyle?: string
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}) {
  const defaultFont= options.font || '20px Arial'
    // 1. Create an offscreen canvas
    const canvas = document.createElement('canvas');
    const measurement = getTextMetrics(canvas, text, options?.font || defaultFont)
    if(!measurement) return
    const { width, height } = measurement
    canvas.width = width+20;
    canvas.height = height+29;
    const ctx = canvas.getContext('2d');
    if(!ctx) return
    // 2. Clear canvas and set typography styles
    ctx.clearRect(0, 0, width, height);
    ctx.font = defaultFont;
    ctx.fillStyle = options?.fillStyle || '#222222';
    ctx.textAlign = options?.textAlign || 'center';
    ctx.textBaseline = options?.textBaseline || 'middle';

    // 3. Draw the text in the exact center
    ctx.fillText(text, width / 2+5, height / 2+5);

    // 4. Convert the canvas directly to a Data URL string
    return {canvas, width, height}
}