// Import various needs
import { idObject } from "./stuff-that-lives-in-database/0.3-create-id-object-from-json.js";
import { SVGtoAppend } from "./convert-json-back-to-svg.js";
import { openModal } from "./open-modal.js";

// Variable declarations for DOM targeting
let svgContainer = document.getElementById("svgContainer");
svgContainer.innerHTML = SVGtoAppend;
let flowchart = svgContainer.firstChild;

const svgElement = flowchart;
const modalOverlay = document.getElementById("modal-overlay");

// Traverse up the DOM tree to find the closest element with an ID
function findElementWithId(target) {
  while (target && !target.id) {
    target = target.parentNode;
  }
  return target;
}

// Handle click events on the SVG element
function handleSvgClick(event) {
  const target = findElementWithId(event.target);

  if (target && target.id && idObject.hasOwnProperty(target.id)) {
    const content = idObject[target.id];
    openModal(content);
    modalOverlay.classList.remove("hidden");
  }
}

// Add event listeners
svgElement.addEventListener("click", handleSvgClick);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});
