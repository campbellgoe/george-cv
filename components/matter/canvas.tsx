import { useEffect, useRef } from "react";
import Matter, { Mouse } from "matter-js"
interface ExtendedMouse extends Mouse {
  mousewheel: EventListener
}
import { createTextTexture } from "@/lib/canvasTexture"
export const MatterCanvas = () => {
const ref = useRef<HTMLCanvasElement>(null)
const containerRef = useRef<HTMLDivElement>(null)
  const firing = useRef(false);
  const prevRect = useRef<DOMRect | null>(null)
  useEffect(() => {
    if(!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect()
    if(!containerRect) return
    
      const canvasTexture = createTextTexture("HTML",200, 140, {
        font: "24px Arial",
        fillStyle: "red"
      })
    prevRect.current = containerRect
    let engine = Matter.Engine.create();
    var world = engine.world;
    const render = Matter.Render.create({
  canvas: ref.current,
  engine,
  options: {
    width: containerRect.width,
    height: containerRect.height,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false,
  },
});
var ball = Matter.Bodies.rectangle(containerRect.width/2, containerRect.height/2, containerRect.height*0.2, containerRect.height*0.1, {
		density: 0.04,
		friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: canvasTexture? {
            texture:  canvasTexture.toDataURL(),
            xScale: 1,
            yScale: 1,
          } : undefined,
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }
	});
	Matter.World.add(world, ball);
	
	//Add a floor
	const left = Matter.Bodies.rectangle(0, containerRect.height/2, containerRect.height*0.15, containerRect.height, {
		isStatic: true, //An immovable object
		render: {
			visible: false
		}
	});
	Matter.World.add(world, left);
  const ceiling = Matter.Bodies.rectangle(containerRect.width/2, 0, containerRect.width, containerRect.height*0.15, {
		isStatic: true, //An immovable object
		render: {
			visible: false
		}
	});
	Matter.World.add(world, ceiling);
  const right = Matter.Bodies.rectangle(containerRect.width, containerRect.height/2, containerRect.height*0.15, containerRect.height, {
		isStatic: true, //An immovable object
		render: {
			visible: false
		}
	});
	Matter.World.add(world, right);
  const floor = Matter.Bodies.rectangle(containerRect.width/2, containerRect.height, containerRect.width, containerRect.height*0.15, {
		isStatic: true, //An immovable object
		render: {
			visible: false
		}
	});
	Matter.World.add(world, floor);
	const mouse = Matter.Mouse.create(render.canvas);
render.mouse = mouse;
	//Make interactive
	var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    mouse,
		constraint: {
			render: {
	        	visible: true
	    	},
	    	stiffness:0.8
	    }
	});
	Matter.World.add(world, mouseConstraint);
	
	//Start the engine
  const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
	Matter.Render.run(render);
//   engine.gravity.y = 1;
// const boxWidth = 69;
// const boxHeight = 69;

// // Generate the base64 text image
// const textSprite = createTextTexture('Hello World', boxWidth, boxHeight, {
//     font: 'bold 24px Helvetica',
//     fillStyle: '#ffcc00'
// });
// if(textSprite){

// // Create the rigid physics body
// const textBody = Matter.Bodies.rectangle(400, 200, boxWidth, boxHeight, {
//     render: {
//         // Set fillStyle to transparent if you only want the text visible
//         fillStyle: '#222222', 
//         sprite: {
//             texture: textSprite,
//             xScale: 1,
//             yScale: 1,
//         }
//     }
// });
// let mouse = Matter.Mouse.create(render.canvas);
// let mouseConstraint = Matter.MouseConstraint.create(engine, {
//   mouse,
//   constraint: {
//     render: {visible: true}
//   }
// });
// mouseConstraint.mouse.element.removeEventListener(
//   "mousewheel",
//   mouseConstraint.mouse.,
// );
mouseConstraint.mouse.element.removeEventListener(
    "wheel",
    (mouseConstraint.mouse as ExtendedMouse).mousewheel
);
mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    (mouseConstraint.mouse as ExtendedMouse).mousewheel
);


Matter.World.add(world, mouseConstraint);
// mouseConstraint.mouse.element.removeEventListener(
//   "DOMMouseScroll",
//   mouseConstraint.mouse.mousewheel,
// );
// render.mouse = mouse;
// const spawnX = 300
// const spawnY = 300
// let ball = Matter.Bodies.rectangle(spawnX, spawnY,20);
// let sling = Matter.Constraint.create({ 
//       pointA: { x: spawnX, y: 300 }, 
//       bodyB: ball, 
//       stiffness: 0.05
//   });

//   let platform = Matter.Bodies.rectangle(500, 500, 300, 20, { isStatic: true });
// let stack = Matter.Composites.stack(300, 20, 6, 6, 0, 0, function(x: number, y:number) {
//     return Matter.Bodies.polygon(x, y, 8, 30); 
// });
// Matter.Events.on(mouseConstraint,'enddrag', function(e) {
//   // @ts-ignore
//   if(e.body === ball) firing.current = true;
// });

Matter.Events.on(engine,'afterUpdate', function() {
  const threshold = 20
  if (ball.position.x <  -threshold || ball.position.x > containerRect.width+threshold || 
    ball.position.y <  -threshold || ball.position.y > containerRect.height+threshold) {
      Matter.World.remove(world, ball);
      ball = Matter.Bodies.rectangle(containerRect.width/2, containerRect.height/2, containerRect.height*0.2, containerRect.height*0.1, {
		density: 0.04,
		friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: canvasTexture? {
            texture:  canvasTexture.toDataURL(),
            xScale: 1,
            yScale: 1,
          } : undefined,
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }
	});
	Matter.World.add(world, ball);
      // ball = Matter.Bodies.circle(spawnX, spawnY, threshold);
      // Matter.World.add(engine.world, ball);
      // sling.bodyB = ball;
      // firing.current = false;
  }
});
// Matter.World.add(engine.world,[platform,textBody,stack, ball,mouseConstraint, ]);
// // Add your body to the simulation world
// // Matter.Composite.add(engine.world, textBody);
// Matter.World.add(engine.world,[]);
// Matter.Runner.run(engine);
// Matter.Render.run(render);
// }
const resizeFn = () => {
  //  const newWidth = window.innerWidth;
  //   const newHeight = window.innerHeight;
     const rect = ref?.current?.getBoundingClientRect()
     const containerRect = containerRef?.current?.getBoundingClientRect()
  if(rect && containerRect && prevRect?.current){
     render.canvas.width = containerRect.width
    render.canvas.height = containerRect.height
    Matter.Render.setSize(render, containerRect.width, containerRect.height); 
 
     const scaleFactorWidth= containerRect.width / prevRect?.current?.width; 
      const scaleFactorHeight= containerRect.height / prevRect?.current?.height; 
    Matter.Body.scale(floor, scaleFactorWidth, 1); 
    Matter.Body.scale(ceiling, scaleFactorWidth, 1); 
    Matter.Body.scale(left, scaleFactorHeight, 1)
    Matter.Body.scale(right, scaleFactorHeight, 1)


    // 4. Reposition the floor at the bottom of the screen
    // Note: If you scaled a static body with custom vertices, you may need to adjust the y-coordinate.
    Matter.Body.setPosition(floor, {
        x: containerRect.width / 2,
        y: containerRect.height,
    });
    Matter.Body.setPosition(ceiling, {
        x: containerRect.width / 2,
        y: 0,
    });
    Matter.Body.setPosition(left, {
        x: 0,
        y: containerRect.height / 2,
    });
    Matter.Body.setPosition(right, {
        x: containerRect.width,
        y: containerRect.height / 2,
    });

    // 5. Update previous width for the next resize
    prevRect.current = containerRect;
  }
}
resizeFn()
window.addEventListener("resize", resizeFn, false)
return () => {
  window.removeEventListener("resize", resizeFn, false)
}
}, [])
return <div ref={containerRef}><canvas ref={ref} height={450} className="mx-auto">
{/* matter bodies appear in here */}
</canvas></div>
}