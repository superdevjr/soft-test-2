import { SVGtoAppend } from "./convert-json-back-to-svg.js";
import { openModal } from "./open-modal.js";

// Function to fetch idObject from the backend
function fetchIdObject() {
  return fetch("http://localhost:3000/api/json-data")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// Fetch idObject and initialize the rest of the code
fetchIdObject().then((idObject) => {
  console.log(idObject);

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
});
