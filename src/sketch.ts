import P5 from "p5";
import Lumen from './Lumen';

const sketch = (p5: P5) => {

  let lumen: Lumen;

  /**
   * This function is called once when the program starts.
   */
  p5.setup = () => {
    // create p5 canvas doohickey
    const canvas = p5.createCanvas(800, 640);
    canvas.parent('doohickey');

    // set background color
    p5.background(0);

    // set fps
    p5.frameRate(30);

    // add your code...
    lumen = new Lumen(p5.createVector(p5.width * 0.5, p5.height * 0.5), p5.color(255), 16);
    lumen.followMouse(false);
  }

  /**
   * This function continuously executes the lines of code contained inside
   *  its block until the program is stopped or noLoop() is called
   */
  p5.draw = () => {
    // set background color
    p5.background(0);

    // add your code...
    lumen.draw();
  }
}

export default new P5(sketch);