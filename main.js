const canvasSaludo = document.getElementById("canvasSaludo");
const canvasCollage = document.getElementById("canvasCollage");

const layoutSaludo = new rive.Layout({
  fit: rive.Fit.ScaleDown,
});
const layoutCollage = new rive.Layout({
  fit: rive.Fit.Fill,
});

const rSaludo = new rive.Rive({
  src: "collage.riv",
  canvas: document.getElementById("canvasSaludo"),
  layout: layoutSaludo,
  animations: "inerit",
  autoplay: true,
  artboard: "Saludo",
  stateMachines: "Girasol",
  onLoad: () => {
    rSaludo.resizeDrawingSurfaceToCanvas();
    console.log("Saludo Cargado Correctamente");
  },
});

const rCollage = new rive.Rive({
  src: "collage.riv",
  canvas: document.getElementById("canvasCollage"),
  layout: layoutCollage,
  animations: "inerit",
  autoplay: false,
  artboard: "Main",
  stateMachines: "Main",
  onLoad: () => {
    rCollage.resizeDrawingSurfaceToCanvas();
    console.log("Collage Cargado correctamente");
  },
});

canvasSaludo.addEventListener("mouseup", () => {
  setTimeout(() => {
    canvasCollage.style.display = "block";
    rCollage.play();
  }, 1000);
  setTimeout(() => {
    canvasSaludo.style.display = "none";
  }, 1500);
});
