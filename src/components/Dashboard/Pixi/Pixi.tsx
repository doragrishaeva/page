import React from 'react';
import * as PIXI from 'pixi.js';

export interface IPixi {}

export const Pixi: React.FC<IPixi> = () => {
    const pixiContainer = React.useRef(null); // This ref will point to the container div
  const app = React.useRef(null); // This ref will store the Pixi application

  React.useEffect(() => {
    // Initialize PixiJS app
    app.current = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });
    pixiContainer.current.appendChild(app.current.view); // Add the canvas to the div

    // Create sprite
    const sprite = PIXI.Sprite.from('../../../assets/login.jpg');
    sprite.anchor.set(0.5);
    sprite.x = app.current.screen.width / 2;
    sprite.y = app.current.screen.height / 2;
    sprite.interactive = true;
    // @ts-ignore
    sprite.buttonMode = true;

    // Dragging logic
    let isDragging = false;

    sprite.on('pointerdown', () => {
      isDragging = true;
      sprite.alpha = 0.5;
    });

    sprite.on('pointerup', () => {
      isDragging = false;
      sprite.alpha = 1;
    });

    sprite.on('pointerupoutside', () => {
      isDragging = false;
      sprite.alpha = 1;
    });

    sprite.on('pointermove', (event) => {
      if (isDragging) {
        const newPosition = event.data.getLocalPosition(sprite.parent);
        sprite.x = newPosition.x;
        sprite.y = newPosition.y;
      }
    });

    app.current.stage.addChild(sprite);

    // Cleanup
    return () => {
      app.current.destroy(true, true);
    };
  }, []);

  return <div ref={pixiContainer}></div>;
};