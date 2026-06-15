import { useEffect, useRef } from "react";
import Matter, { Mouse } from "matter-js";
import { createTextTexture } from "@/lib/canvasTexture";
import { skills } from "@/context/skills";
import { colours } from "@/context/colours";

interface ExtendedMouse extends Mouse {
  mousewheel: EventListener;
}

const WALL_THICKNESS_RATIO = 0.15;
const BALL_WIDTH_RATIO = 0.15;
const BALL_HEIGHT_RATIO = 0.05;

export const MatterCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousRectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const containerRect = container.getBoundingClientRect();

    previousRectRef.current = containerRect;

    const textureCanvases = skills.map((skill, i) => {
      return createTextTexture(skill, {
      font: "20px Arial",
      fillStyle: colours[i%colours.length],
    })
  })

    const spriteTextures = textureCanvases.filter(a => a && a.canvas).map((a) => ({
      texture: a?.canvas?.toDataURL(),
      width: a?.width || 50,
      height: a?.height || 25
  })).filter(a => !!a) as { texture: string, width: number; height: number}[]

    const engine = Matter.Engine.create();
    const world = engine.world;

    const render = Matter.Render.create({
      canvas,
      engine,
      options: {
        width: containerRect.width,
        height: containerRect.height,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    const createBall = ({texture, width, height}: { texture: string; width:number; height:number}, x = Math.random()*300-150, y = Math.random()*300-150) =>
      Matter.Bodies.rectangle(
        containerRect.width / 2 + x,
        containerRect.height / 2 + y,
        width + 12,
        height+ 12,
        {
          density: 0.04,
          friction: 0.01,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
            sprite: texture
              ? {
                  texture: texture,
                  xScale: 1,
                  yScale: 1,
                }
              : undefined,
            fillStyle: "#F35e66",
            strokeStyle: "black",
            lineWidth: 1,
          },
        }
      );

    const wallThickness =
      containerRect.height * WALL_THICKNESS_RATIO;

    const leftWall = Matter.Bodies.rectangle(
      -wallThickness,
      containerRect.height / 2,
      wallThickness,
      containerRect.height,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    const rightWall = Matter.Bodies.rectangle(
      containerRect.width+wallThickness,
      containerRect.height / 2,
      wallThickness,
      containerRect.height,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    const ceiling = Matter.Bodies.rectangle(
      containerRect.width / 2,
      -wallThickness,
      containerRect.width,
      wallThickness,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    const floor = Matter.Bodies.rectangle(
      containerRect.width / 2,
      containerRect.height+wallThickness,
      containerRect.width,
      wallThickness,
      {
        isStatic: true,
        render: { visible: false },
      }
    );
let balls: [Matter.Body, string][] = []
    spriteTextures.forEach((a) => {
      const ball = createBall(a)
 balls.push([ball, a.texture]);
    Matter.World.add(world, ball);
    })
    

    Matter.World.add(world, [
      leftWall,
      rightWall,
      ceiling,
      floor,
    ]);

    const mouse = Matter.Mouse.create(render.canvas);

    render.mouse = mouse;

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.8,
        render: {
          visible: true,
        },
      },
    });

    Matter.World.add(world, mouseConstraint);

    mouseConstraint.mouse.element.removeEventListener(
      "wheel",
      (mouseConstraint.mouse as ExtendedMouse).mousewheel
    );

    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      (mouseConstraint.mouse as ExtendedMouse).mousewheel
    );

    Matter.Events.on(engine, "afterUpdate", () => {
      const threshold = 20;
balls.forEach(([ball, texture]) => {


      const outsideBounds =
        ball.position.x < -threshold ||
        ball.position.x > containerRect.width + threshold ||
        ball.position.y < -threshold ||
        ball.position.y > containerRect.height + threshold;
        if (!outsideBounds) return;
  Matter.Body.setPosition(ball, {
        x: containerRect.width / 2 + Math.random()*300-150,
        y: containerRect.height / 2 + Math.random()*400-200,
      });
      // Matter.World.remove(world, ball);

      // ball = createBall(texture);

      // Matter.World.add(world, ball);
})
      
    });

    const runner = Matter.Runner.create();

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const handleResize = () => {
      const nextRect = container.getBoundingClientRect();
      const previousRect = previousRectRef.current;

      if (!previousRect) return;

      Matter.Render.setSize(
        render,
        nextRect.width,
        nextRect.height
      );

      const widthScale =
        nextRect.width / previousRect.width;

      const heightScale =
        nextRect.height / previousRect.height;

      Matter.Body.scale(floor, widthScale, 1);
      Matter.Body.scale(ceiling, widthScale, 1);

      Matter.Body.scale(leftWall, heightScale, 1);
      Matter.Body.scale(rightWall, heightScale, 1);

      Matter.Body.setPosition(floor, {
        x: nextRect.width / 2,
        y: nextRect.height,
      });

      Matter.Body.setPosition(ceiling, {
        x: nextRect.width / 2,
        y: 0,
      });

      Matter.Body.setPosition(leftWall, {
        x: 0,
        y: nextRect.height / 2,
      });

      Matter.Body.setPosition(rightWall, {
        x: nextRect.width,
        y: nextRect.height / 2,
      });

      previousRectRef.current = nextRect;
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      Matter.Render.stop(render);
      Matter.Runner.stop(runner);

      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);

      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div ref={containerRef}>
      <canvas
        ref={canvasRef}
        height={600}
        className="mx-auto"
      />
    </div>
  );
};