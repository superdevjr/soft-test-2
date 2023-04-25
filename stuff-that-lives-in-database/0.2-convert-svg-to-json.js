/* 

At this point, you'll have just the raw SVG and be passing it in here to be converted to a JSON object, which you'll want to save
somehow (perhaps will automate this at some point). The newly generated JSON object will be used two places. 

1. It will go to the client and be turned back into an SVG
2. It will go to another utility function that will parse the JSON and extract a new JSON made up of the ID's of the various shapes
and text elements in the SVG as keys, and nested objects as values which themselves will contain templated boilerplate content to 
aid you in testing. More on that later.

*/

import { uncovertedSvg } from "./0.1-raw-svg-unconverted.js";

// Main function to convert an SVG string to a JSON object
function svgToJson(svgString) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  const svgRoot = svgDoc.documentElement;
  return parseNode(svgRoot);
}

// Parses a DOM node and returns the appropriate JSON object
function parseNode(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return parseElementNode(node);
  } else if (node.nodeType === Node.TEXT_NODE) {
    return parseTextNode(node);
  }
}

// Parses an element node and returns a JSON object
function parseElementNode(node) {
  const elementObject = {
    type: "element",
    tagName: node.tagName,
    attributes: getAttributes(node),
    children: getChildNodes(node),
  };

  return elementObject;
}

// Extracts the attributes from a DOM element and returns an object
function getAttributes(node) {
  const attributes = {};
  for (const attr of node.attributes) {
    attributes[attr.name] = attr.value;
  }
  return attributes;
}

// Gets the child nodes of a DOM element and returns an array of JSON objects
function getChildNodes(node) {
  return Array.from(node.childNodes)
    .map((childNode) => parseNode(childNode))
    .filter((parsedChildNode) => {
      if (parsedChildNode.type === "text") {
        return parsedChildNode.content.trim().length > 0;
      }
      return true;
    });
}

// Parses a text node and returns a JSON object
function parseTextNode(node) {
  const textContent = node.textContent.trim();

  return {
    type: "text",
    content: textContent,
  };
}

export const JSONfromSVG = svgToJson(uncovertedSvg);

/* 

Output should look similar to this 

{
  "type": "element",
  "tagName": "svg",
  "attributes": {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "1808",
      "height": "1897",
      "viewBox": "0 0 1808 1897",
      "fill": "none"
  },
  "children": [
      {
          "type": "element",
          "tagName": "g",
          "attributes": {
              "id": "Component 1"
          },
          "children": [
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "Rectangle 1",
                      "x": "693",
                      "y": "471",
                      "width": "812",
                      "height": "368",
                      "fill": "#FF0000",
                      "stroke": "black",
                      "stroke-width": "4"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "SOME RANDOM SUBJECT",
                      "x": "321",
                      "y": "22",
                      "width": "464",
                      "height": "188",
                      "fill": "#D9D9D9"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "line",
                  "attributes": {
                      "id": "plorp",
                      "x1": "786.391",
                      "y1": "117.688",
                      "x2": "1069.39",
                      "y2": "472.688",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "line",
                  "attributes": {
                      "id": "chester",
                      "x1": "322.409",
                      "y1": "109.288",
                      "x2": "139.409",
                      "y2": "369.288",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "tester",
                      "y": "369",
                      "width": "278",
                      "height": "121",
                      "fill": "#008000"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "text",
                  "attributes": {
                      "id": "some example text",
                      "fill": "black",
                      "xml:space": "preserve",
                      "style": "white-space: pre",
                      "font-family": "Inter",
                      "font-size": "32",
                      "letter-spacing": "0em"
                  },
                  "children": [
                      {
                          "type": "element",
                          "tagName": "tspan",
                          "attributes": {
                              "x": "384",
                              "y": "126.136"
                          },
                          "children": [
                              {
                                  "type": "text",
                                  "content": "some example text"
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "element",
                  "tagName": "text",
                  "attributes": {
                      "id": "some_more_text",
                      "fill": "black",
                      "xml:space": "preserve",
                      "style": "white-space: pre",
                      "font-family": "Inter",
                      "font-size": "32",
                      "letter-spacing": "0em"
                  },
                  "children": [
                      {
                          "type": "element",
                          "tagName": "tspan",
                          "attributes": {
                              "x": "948",
                              "y": "676.136"
                          },
                          "children": [
                              {
                                  "type": "text",
                                  "content": "some more text"
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "Rectangle 3",
                      "x": "594",
                      "y": "1078",
                      "width": "1213",
                      "height": "125",
                      "rx": "20",
                      "fill": "#D9D9D9"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "Rectangle 4",
                      "x": "327",
                      "y": "1382",
                      "width": "1213",
                      "height": "125",
                      "rx": "20",
                      "fill": "#D67EFF"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "Rectangle 5",
                      "x": "344",
                      "y": "1495",
                      "width": "1213",
                      "height": "125",
                      "rx": "20",
                      "fill": "#D9D9D9"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "line",
                  "attributes": {
                      "id": "Line 1",
                      "x1": "1508.17",
                      "y1": "602.53",
                      "x2": "1807.17",
                      "y2": "711.53",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "line",
                  "attributes": {
                      "id": "Line 2",
                      "x1": "689.984",
                      "y1": "723.5",
                      "x2": "343.984",
                      "y2": "712.5",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "text",
                  "attributes": {
                      "id": "text up here",
                      "fill": "black",
                      "xml:space": "preserve",
                      "style": "white-space: pre",
                      "font-family": "Inter",
                      "font-size": "32",
                      "letter-spacing": "0em"
                  },
                  "children": [
                      {
                          "type": "element",
                          "tagName": "tspan",
                          "attributes": {
                              "x": "1188",
                              "y": "24.1364"
                          },
                          "children": [
                              {
                                  "type": "text",
                                  "content": "text up here"
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "element",
                  "tagName": "rect",
                  "attributes": {
                      "id": "Rectangle 2",
                      "x": "1087.5",
                      "y": "42.5",
                      "width": "576",
                      "height": "56",
                      "fill": "#75CDFF",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "line",
                  "attributes": {
                      "id": "Line 3",
                      "x1": "1095.5",
                      "y1": "829.048",
                      "x2": "1014.5",
                      "y2": "1676.05",
                      "stroke": "black"
                  },
                  "children": []
              },
              {
                  "type": "element",
                  "tagName": "ellipse",
                  "attributes": {
                      "id": "Ellipse 1",
                      "cx": "937.5",
                      "cy": "1786.5",
                      "rx": "383.5",
                      "ry": "110.5",
                      "fill": "#D9D9D9"
                  },
                  "children": []
              }
          ]
      }
  ]
}
*/
