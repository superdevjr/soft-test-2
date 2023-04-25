/* 

The purpose of this code is simply to assist you in creating your own flowcharts. The output will be A JSON object as is seen below
inside the function definition of extractIds. There's a few ways to grab this output. In any case, once you have the output,
your next step would be to manually edit the values for the content that you want. Once you have that, set it as the export.
It's self explanatory. Formatting is super critical here, though, so be mindful. 

------
IMPORTANT CONCEPT: Say that you have a rectangle shape for a subject like "Patience", and the label as well. Due to the nature of 
Figma's output, they'll both be represented by a singular key. Make sure you account for this by making both of them linked to the
same object of content. I considered other approaches to this but this by far the simplest (at least for me as dev, haha).
------

*/

import { JSONfromSVG } from "./0.2-convert-svg-to-json.js";

function extractIds(obj, result = {}) {
  if (Array.isArray(obj.children) && obj.children.length > 0) {
    obj.children.forEach((child) => {
      extractIds(child, result);
    });
  }

  if (
    obj.type === "element" &&
    obj.tagName !== "g" &&
    obj.tagName !== "line" &&
    obj.attributes &&
    obj.attributes.id
  ) {
    result[obj.attributes.id] = {
      heading: `Dummy heading for ${obj.attributes.id}`,
      body: `Dummy body content for ${obj.attributes.id}`,
      links: [
        {
          title: `Dummy link 1 for ${obj.attributes.id}`,
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: `Dummy link 2 for ${obj.attributes.id}`,
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    };
  }

  return result;
}

export const idObject = extractIds(JSONfromSVG);

// export const idObject = {
//   "Rectangle 1": {
//     heading: "Dummy heading for Rectangle 1",
//     body: "Dummy body content for Rectangle 1",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 1",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 1",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "SOME RANDOM SUBJECT": {
//     heading: "Dummy heading for some example text",
//     body: "Dummy body content for some example text",
//     links: [
//       {
//         title: "Dummy link 1 for some example text",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for some example text",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   tester: {
//     heading: "Dummy heading for tester",
//     body: "Dummy body content for tester",
//     links: [
//       {
//         title: "Dummy link 1 for tester",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for tester",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "some example text": {
//     heading: "Dummy heading for some example text",
//     body: "Dummy body content for some example text",
//     links: [
//       {
//         title: "Dummy link 1 for some example text",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for some example text",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   some_more_text: {
//     heading: "Dummy heading for Rectangle 1",
//     body: "Dummy body content for Rectangle 1",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 1",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 1",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "Rectangle 3": {
//     heading: "Dummy heading for Rectangle 3",
//     body: "Dummy body content for Rectangle 3",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 3",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 3",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "Rectangle 4": {
//     heading: "Dummy heading for Rectangle 4",
//     body: "Dummy body content for Rectangle 4",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 4",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 4",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "Rectangle 5": {
//     heading: "Dummy heading for Rectangle 5",
//     body: "Dummy body content for Rectangle 5",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 5",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 5",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "text up here": {
//     heading: "Dummy heading for text up here",
//     body: "Dummy body content for text up here",
//     links: [
//       {
//         title: "Dummy link 1 for text up here",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for text up here",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "Rectangle 2": {
//     heading: "Dummy heading for Rectangle 2",
//     body: "Dummy body content for Rectangle 2",
//     links: [
//       {
//         title: "Dummy link 1 for Rectangle 2",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Rectangle 2",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
//   "Ellipse 1": {
//     heading: "Dummy heading for Ellipse 1",
//     body: "Dummy body content for Ellipse 1",
//     links: [
//       {
//         title: "Dummy link 1 for Ellipse 1",
//         url: "https://example.com/placeholder1",
//         read: false,
//       },
//       {
//         title: "Dummy link 2 for Ellipse 1",
//         url: "https://example.com/placeholder2",
//         read: false,
//       },
//     ],
//   },
// };
