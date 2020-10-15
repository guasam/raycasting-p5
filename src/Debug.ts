import { Vector } from 'p5';
import p5 from './sketch';

class Debug {
  static LumenPosition(position: Vector) {
    p5.textSize(32);
    p5.stroke('black');
    p5.fill('red');
    p5.text(`Lumen Position : (${position.x}, ${position.y})`, 10, 30);
  }

  static CastedRaysCount(count:number) {
    p5.text(`Rays Casted : ${count}`, 10, 80);
  }

  static RaysCount(count: number) {
    p5.text(`Rays Count : ${count}`, 10, 130);
  }
}

export default Debug;