import P5, { Color, Vector } from 'p5';
import p5Instance from './sketch';

class Wall {
  p5: P5;
  position: {
    a: Vector,
    b: Vector
  };
  color: Color;
  thickness: number;

  constructor(_posA: P5.Vector, _posB: P5.Vector, _thickness?: number, _color?: P5.Color) {
    this.p5 = p5Instance;
    this.color = _color ?? this.p5.color('white');
    this.thickness = _thickness;
    this.position = { a: _posA, b: _posB };
  }

  draw() {
    const { p5, thickness, color } = this;
    const { a, b } = this.position;

    // apply thickness
    if (thickness) p5.strokeWeight(thickness);
    // apply color
    p5.stroke(color);
    // create line
    p5.line(a.x, a.y, b.x, b.y);
  }
}

export default Wall;