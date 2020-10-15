import P5, { Color, Vector } from 'p5';
import Ray from './Ray';
import p5Instance from './sketch';
import Wall from './Wall';

interface CastRaysToWalls {
  casted_rays_count: number;
}

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
    const { p5, follow_mouse, color, radius, position } = this;

    // should we follow mouse?
    if (follow_mouse) {
      this.position = p5.createVector(p5.mouseX, p5.mouseY)
    }

    // draw circle for lumen
    p5.fill(color);
    p5.noStroke();
    p5.circle(position.x, position.y, radius * 2);
  }

  castRaysToWalls(walls: Wall[], rays_count: number = 360) : CastRaysToWalls {
    const { p5 } = this;
    let casted_rays_count = 0;

    // loop through rays count
    for (let i = 0; i < rays_count; i++) {
      let length: number = Infinity;
      let closest: Vector = p5.createVector(0, 0);
      p5.angleMode(p5.DEGREES);
      let ray = new Ray(this.position, p5.createVector(p5.width, p5.height).rotate(i), p5.color('white'));

      // loop through walls
      walls.forEach((wall) => {
        // get intersection point to wall
        let intersection = Ray.Intersection(ray, wall);
        // cast ray to intersection point
        if (intersection) {
          // calculate distance between lumen position and ray intersection point to wall
          var distance = this.position.dist(intersection);
          // check if distance is smaller than length of ray
          if (distance < length) {
            // change length of ray to calculated distance of intersection
            length = distance;
            // cache intersection point of closest wall
            closest = intersection;
          }
        }
      });

      // got any closest wall?
      if (closest.x > 0 || closest.y > 0) {
        // change position.b of ray to closest wall so it doesn't overflow
        ray.position.b = closest;
        // increase casted rays count
        casted_rays_count++;
      }
      // draw ray
      ray.draw();
    }

    return {
      casted_rays_count
    }
  }
}

export default Lumen;