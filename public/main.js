import { SVGtoAppend } from "./convert-json-back-to-svg.js";
import { openModal } from "./open-modal.js";
import { idObject } from "./stuff-that-lives-in-database/0.3-create-id-object-from-json.js";
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
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbxuHpiCJZrnXgZB1ax9xPgRSiN1OyhM4",
  authDomain: "softies-ea9e3.firebaseapp.com",
  projectId: "softies-ea9e3",
  storageBucket: "softies-ea9e3.appspot.com",
  messagingSenderId: "99965585561",
  appId: "1:99965585561:web:88926f8e24ae93e3a35008",
  measurementId: "G-L706YHLT94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
