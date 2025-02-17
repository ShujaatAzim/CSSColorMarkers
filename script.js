const tooltip = document.getElementById("tooltip");
const legendDescription = document.getElementById("legend-description")

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

document.querySelectorAll(".legend").forEach(legend => {
  legend.addEventListener("mouseenter", (event) => {
    const legendRank = event.target.getAttribute("rank")
    let legendContent = 'hello'
    switch(legendRank) {
      case "primary":
        legendContent = "Primary colors are the fundamental building blocks for deriving all other colors on a digital screen.";
        break;
      case "secondary":
        legendContent = "Secondary colors are made by combining two primary colors together in equal parts.";
        break;
      case "tertiary":
        legendContent = "Tertiary colors are made by combining a primary color with a secondary color.";
        break;
      default:
        legendContent = '';
    }
    legendDescription.textContent = legendContent;
    legendDescription.style.opacity = "1";
  })

  legend.addEventListener("mousemove", (event) => {
    legendDescription.style.left = event.pageX + 10 + "px";
    legendDescription.style.top = event.pageY + 10 + "px";
  });

  legend.addEventListener("mouseleave", () => {
    legendDescription.style.opacity = "0";
  });
})