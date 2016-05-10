function circle(ctx, x, y, radius) {
  ctx.arc(x, y, radius, 0, Math.PI * 2);
}

function centredCircle(ctx, window, radius) {
  const x = window.innerWidth  / 2;
  const y = window.innerHeight / 2;
  circle(ctx, x, y, radius);
}

export { circle, centredCircle };
