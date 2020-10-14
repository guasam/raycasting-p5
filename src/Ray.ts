import P5, { Color, Vector } from 'p5';
import p5Instance from './sketch';
import Wall from './Wall';

class Ray {
  p5: P5;
  color: Color;
  position: {
    a: Vector,
    b: Vector
  };

  constructor(posA: Vector, posB: Vector, color: Color) {
    this.p5 = p5Instance;
    this.color = color;
    this.position = { a: posA, b: posB };
  }

  setPosition(posA: Vector, posB: Vector) {
    this.position = { a: posA, b: posB };
  }

  static Intersection(ray: Ray, wall: Wall) {
    let x1 = ray.position.a.x;
    let y1 = ray.position.a.y;
    let x2 = ray.position.b.x;
    let y2 = ray.position.b.y;

    let x3 = wall.position.a.x;
    let y3 = wall.position.a.y;;
    let x4 = wall.position.b.x;
    let y4 = wall.position.b.y;

    var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    // stop here if denominatoris zero (happens when both line are parellel)
    if (denominator === 0) return;

    // intersection point of the lines is found with one
    // of the following values of t or u
    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    // intersection point falls within the first line segment if 0.0 ≤ t ≤ 1.0
    // and it falls within the second line segment if 0.0 ≤ u ≤ 1.0
    if (t > 0 && t < 1 && u > 0 && u < 1) {
      return p5Instance.createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    }
  }
}

export default Ray;