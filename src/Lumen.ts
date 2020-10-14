import P5, { Color, Vector } from 'p5';
import p5Instance from './sketch';

class Lumen {
  p5: P5;
  position: Vector;
  color: Color;
  radius: number;
  follow_mouse: boolean = false;

  constructor(_position: Vector, _color: Color, _radius: number) {
    this.p5 = p5Instance;
    this.position = _position;
    this.color = _color;
    this.radius = _radius;
  }

  setPosition(position: Vector) {
    this.position = position;
  }

  followMouse(value: boolean) {
    this.follow_mouse = value;
  }

  draw() {
    const { p5 } = this;

    // should we follow mouse?
    if (this.follow_mouse) {
      this.position = p5.createVector(p5.mouseX, p5.mouseY)
    }

    // draw circle for lumen
    p5.fill(this.color);
    p5.noStroke();
    p5.circle(this.position.x, this.position.y, this.radius * 2);
  }
}

export default Lumen;