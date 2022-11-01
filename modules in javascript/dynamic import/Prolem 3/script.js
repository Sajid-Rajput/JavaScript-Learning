let shapes = [
  { type: "rectangle" },
  { type: "triangle" },
  { type: "rectangle" },
];

// shapes.forEach((shape) => {
//   import(`./${shape.type}.js`).then(({default: render}) =>{
//     render();
//   })
// });

shapes.forEach(async(shape) => {
  const { default: render } = await import(`./${shape.type}.js`);
  render();
});
