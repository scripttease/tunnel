import "./style.css";
import { context }       from "./canvas";
import { centredCircle } from "./shape";
import { perlin }      from "../vendor/noise";
window.perlin = perlin;

context.strokeStyle = "hotpink";
context.lineWidth = 2;

for (let i = 0; i < 10; i++) {
  const radius = 25 + i * 30;
  context.beginPath();
  centredCircle(context, window, radius);
  context.stroke();
}

