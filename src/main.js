import "./style.css";
import { context }       from "./canvas";
import { centredCircle } from "./shape";

centredCircle(context, window, 200);

context.fillStyle = "hotpink";
context.fill();
