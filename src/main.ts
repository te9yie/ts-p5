import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(16 * 20, 9 * 20);
  };
  p.draw = () => {
    p.background(43);
  };
};

new p5(sketch);
