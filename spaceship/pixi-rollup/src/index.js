import { Application, Sprite, Texture, Container, Graphics, Text } from 'pixi.js';


// major components

// 1renderer
// 2container
// 3loader
// 4ticker
// 5application (1renderer, 3loader, 4ticker)
// 6interaction
// 7accessibility


// #1 creating the application instance 
//const app = new Application( {resizeTo: window,} );
const app = new Application({ width: 400, height: 300 });

// #2 adding the view to the DOM
document.body.appendChild(app.view);



//const sprite = Sprite.from(Texture.WHITE);
//sprite.tint = 0x22233;


const container = new Container();


// #3 load a sprite
let sprite = Sprite.from('assets/ss2.png', );

sprite.width =30;
sprite.height =20;

// #4 adding the spirt to the sage
app.stage.addChild(sprite);

const direction = [1, 1];
const speed = 1;




// Create window frame
let frame = new Graphics();
frame.beginFill(0x666666);
frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
frame.drawRect(0, 0, 188, 108);
frame.position.set(320 - 180, 180 - 120);
app.stage.addChild(frame);


// Create a graphics object to define our mask
let mask = new Graphics();
// Add the rectangular area to show
mask.beginFill(0xffffff);
mask.drawRect(0,0,280,220);
mask.endFill();


// Add container that will hold our masked content
let maskContainer = new Container();
// Set the mask to use our graphics object from above
maskContainer.mask = mask;
// Add the mask as a child, so that the mask is positioned relative to its parent
maskContainer.addChild(mask);
// Offset by the window's frame width
maskContainer.position.set(4,4);
// And add the container to the window!
frame.addChild(maskContainer);


// Create contents for the masked container
let text = new Text(
  'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
  'You can put anything in the container and it will be masked!',
  {
    fontSize: 10,
    fill: 0x1010ff,
    wordWrap: true,
    wordWrapWidth: 180
  }
);
text.x = 10;
maskContainer.addChild(text);




let elapsed = 0.0;

app.ticker.add(delta => {
    sprite.x += direction[0] * speed * delta;
    sprite.y += direction[1] * speed * delta;
    if (sprite.x < 0 || sprite.x > app.screen.width - sprite.width) {
        direction[0] *= -1;
    }
    if (sprite.y < 0 || sprite.y > app.screen.height - sprite.height) {
        direction[1] *= -1;
    }
    sprite.rotation += 0.05 * delta;

      elapsed += delta;
  text.y = 10 + -100.0 + Math.cos(elapsed/50.0) * 100.0;
});














