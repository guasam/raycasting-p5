import P5 from 'p5';

class Lumen {
  p5: P5;
  position: P5.Vector;
  color: P5.Color;
  radius: number;
  follow_mouse: boolean = false;

  constructor(_p5: P5, _position: P5.Vector, _color: P5.Color, _radius: number) {
    this.p5 = _p5;
    this.position = _position;
    this.color = _color;
    this.radius = _radius;
  }

  setPosition(position: P5.Vector) {
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