import { useEffect, useRef } from "react";
import Matter, { Mouse } from "matter-js"
interface ExtendedMouse extends Mouse {
  mousewheel: EventListener
}
import { createTextTexture } from "@/lib/canvasTexture"
export const MatterCanvas = () => {
const ref = useRef<HTMLCanvasElement>(null)

  const firing = useRef(false);
  const prevRect = useRef<DOMRect | null>(null)
  useEffect(() => {
    if(!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    prevRect.current = rect
    let engine = Matter.Engine.create();
    var world = engine.world;
    const render = Matter.Render.create({
  canvas: ref.current,
  engine,
  options: {
    width: rect.width,
    height: rect.height,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false,
  },
});
var ball = Matter.Bodies.circle(rect.width/2, rect.height/2, rect.height*0.15, {
		density: 0.04,
		friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }
	});
	Matter.World.add(world, ball);
	
	//Add a floor
	const left = Matter.Bodies.rectangle(0, rect.height/2, rect.height*0.15, rect.height, {
		isStatic: true, //An immovable object
		render: {
			visible: true
		}
	});
	Matter.World.add(world, left);
  const ceiling = Matter.Bodies.rectangle(rect.width/2, 0, rect.width, rect.height*0.15, {
		isStatic: true, //An immovable object
		render: {
			visible: true
		}
	});
	Matter.World.add(world, ceiling);
  const right = Matter.Bodies.rectangle(rect.width, rect.height/2, rect.height*0.15, rect.height, {
		isStatic: true, //An immovable object
		render: {
			visible: true
		}
	});
	Matter.World.add(world, right);
  const floor = Matter.Bodies.rectangle(rect.width/2, rect.height, rect.width, rect.height*0.15, {
		isStatic: true, //An immovable object
		render: {
			visible: true
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
// let ball = Matter.Bodies.circle(spawnX, spawnY,20);
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

      const canvasTexture = createTextTexture("Hello", 60, 29, {})
Matter.Events.on(engine,'afterUpdate', function() {
  const threshold = 20
  if (ball.position.x <  -threshold || ball.position.x > rect.width+threshold || 
    ball.position.y <  -threshold || ball.position.y > rect.height+threshold) {
      Matter.World.remove(world, ball);
      ball = Matter.Bodies.circle(rect.width/2, rect.height/2, rect.height*0.15, {
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
  if(rect && prevRect?.current){
     render.canvas.width = Math.max(window.innerWidth, rect.width);
    render.canvas.height =  Math.max(window.innerHeight,rect.height);
    Matter.Render.setSize(render, rect.width, rect.height); 
 
     const scaleFactor = rect.width / prevRect?.current?.width; 
    Matter.Body.scale(floor, scaleFactor, 1); 

    // 4. Reposition the floor at the bottom of the screen
    // Note: If you scaled a static body with custom vertices, you may need to adjust the y-coordinate.
    Matter.Body.setPosition(floor, {
        x: rect.width / 2,
        y: rect.height,
    });

    // 5. Update previous width for the next resize
    prevRect.current = rect;
  }
}
window.addEventListener("resize", resizeFn, false)
return () => {
  window.removeEventListener("resize", resizeFn, false)
}
}, [])
return <canvas ref={ref} className="mx-auto">
{/* matter bodies appear in here */}
</canvas>
}