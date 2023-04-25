/* 

This file might be considered the first or is one of the first steps upon a user navigating to the page. As indicated in the code, it's purpose is to take the JSON from an earlier step, convert it to an SVG, and export it for later appending to the DOM 

*/

import { JSONfromSVG } from "../stuff-that-lives-in-database/0.2-convert-svg-to-json.js";

function jsonToSvg(json) {
  const attributes = json.attributes || {};
  const children = json.children || [];
  const tagName = json.tagName || "svg";

  let svg = `<${tagName}`;
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      svg += ` ${key}="${attributes[key]}"`;
    }
  }
  svg += ">";

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === "text") {
      svg += child.content;
    } else if (child.type === "element") {
      svg += jsonToSvg(child);
    }
  }

  svg += `</${tagName}>`;
  return svg;
}

export const SVGtoAppend = jsonToSvg(JSONfromSVG);
