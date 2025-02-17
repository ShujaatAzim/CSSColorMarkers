const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".marker").forEach(marker => {
  marker.addEventListener("mouseenter", (event) => {
    const markerColor = event.target.getAttribute("marker-color")
    const makeup = event.target.getAttribute("makeup")
    const rank = event.target.getAttribute("rank")
    const rgbName = event.target.getAttribute("rgb-color");
    const hexName = event.target.getAttribute("hex-color");
    const hslName = event.target.getAttribute("hsl-color");

    const tooltipText = `${markerColor}\nRank: ${rank}\nMakeup: ${makeup}\nRGB: ${rgbName}\nHEX: ${hexName}\nHSL: ${hslName}`
    tooltip.textContent = tooltipText;
    tooltip.style.opacity = "1";
  });

  marker.addEventListener("mousemove", (event) => {
    tooltip.style.left = event.pageX + 10 + "px";
    tooltip.style.top = event.pageY + 10 + "px";
  });

  marker.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});