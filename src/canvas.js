const canvasElement = document.createElement("canvas");
const context       = canvasElement.getContext("2d");

canvasElement.height = window.innerHeight - 4;
canvasElement.width  = window.innerWidth;

document.body.appendChild(canvasElement);

export { canvasElement, context };
