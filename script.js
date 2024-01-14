document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("paintCanvas");
  const context = canvas.getContext("2d");
  const brushSizeSlider = document.getElementById("brushSizeSlider");
  const brushColorPicker = document.getElementById("brushColorPicker");
  const clearCanvasBtn = document.getElementById("clearCanvasBtn");
  const twitterBtn = document.getElementById("twitterBtn");
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    context.lineWidth = brushSizeSlider.value;
    context.lineCap = "round";
    context.strokeStyle = brushColorPicker.value;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function visitTwitterProfile() {
    window.location.href = "https://twitter.com/ilysmBrook";
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);

  clearCanvasBtn.addEventListener("click", clearCanvas);
  twitterBtn.addEventListener("click", visitTwitterProfile);
});
