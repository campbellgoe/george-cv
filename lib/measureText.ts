export function getTextMetrics(canvas: HTMLCanvasElement, text: string, fontCSS: string): { width: number; height: number} | null {
  const ctx = canvas.getContext("2d");
  if(!ctx) return null
  // Set font properties matching your CSS exactly (e.g., "bold 16px Arial")
  ctx.font = fontCSS; 
  
  const metrics = ctx.measureText(text);
  
  return {
    width: metrics.width,
    // actualBoundingBox properties hug the rendered pixels tightly
    height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
  };
}