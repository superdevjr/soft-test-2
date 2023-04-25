const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/api/json-data", (req, res) => {
  const jsonData = {
    passion: {
      heading: "Dummy heading for passion",
      body: "Dummy body content for passion",
      links: [
        {
          title: "Dummy link 1 for passion",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for passion",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    passion_2: {
      heading: "Dummy heading for passion_2",
      body: "Dummy body content for passion_2",
      links: [
        {
          title: "Dummy link 1 for passion_2",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for passion_2",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    courage: {
      heading: "Dummy heading for courage",
      body: "Dummy body content for courage",
      links: [
        {
          title: "Dummy link 1 for courage",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for courage",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    courage_2: {
      heading: "Dummy heading for courage_2",
      body: "Dummy body content for courage_2",
      links: [
        {
          title: "Dummy link 1 for courage_2",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for courage_2",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    tester: {
      heading: "Dummy heading for tester",
      body: "Dummy body content for tester",
      links: [
        {
          title: "Dummy link 1 for tester",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for tester",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "Rectangle 3": {
      heading: "Dummy heading for Rectangle 3",
      body: "Dummy body content for Rectangle 3",
      links: [
        {
          title: "Dummy link 1 for Rectangle 3",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for Rectangle 3",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "Rectangle 4": {
      heading: "Dummy heading for Rectangle 4",
      body: "Dummy body content for Rectangle 4",
      links: [
        {
          title: "Dummy link 1 for Rectangle 4",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for Rectangle 4",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "Rectangle 5": {
      heading: "Dummy heading for Rectangle 5",
      body: "Dummy body content for Rectangle 5",
      links: [
        {
          title: "Dummy link 1 for Rectangle 5",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for Rectangle 5",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "text up here": {
      heading: "Dummy heading for text up here",
      body: "Dummy body content for text up here",
      links: [
        {
          title: "Dummy link 1 for text up here",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for text up here",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "Rectangle 2": {
      heading: "Dummy heading for Rectangle 2",
      body: "Dummy body content for Rectangle 2",
      links: [
        {
          title: "Dummy link 1 for Rectangle 2",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for Rectangle 2",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
    "Ellipse 1": {
      heading: "Dummy heading for Ellipse 1",
      body: "Dummy body content for Ellipse 1",
      links: [
        {
          title: "Dummy link 1 for Ellipse 1",
          url: "https://example.com/placeholder1",
          read: false,
        },
        {
          title: "Dummy link 2 for Ellipse 1",
          url: "https://example.com/placeholder2",
          read: false,
        },
      ],
    },
  };

  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
