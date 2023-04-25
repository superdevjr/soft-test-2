const modal = document.getElementById("modal");
const modalHeading = document.getElementById("modal-heading");
const modalBody = document.getElementById("modal-body");
const modalLinks = document.getElementById("modal-links");

// Function that populates modal with text based content (goes in open modal function)
export function populateModalWithTextBasedContent(content) {
  modalHeading.textContent = content.heading;
  modalBody.textContent = content.body;
  modalLinks.innerHTML = "";

  content.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.title;
    anchor.target = "_blank";
    modalLinks.appendChild(anchor);
  });
}

// Function that populates modal with a progress bar (goes in open modal function)
export function populateModalWithProgressBar(content) {
  const progressBarContainer = document.getElementById(
    "progress-bar-container"
  );
  progressBarContainer.innerHTML = "";

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progressBar.style.width = content.progress + "%";

  progressBarContainer.appendChild(progressBar);
}

// Function that populates modal with read/unread buttons (goes in open modal function)
export function populateModalWithReadUnreadButtons(content) {
  const readUnreadButtonsContainer = document.getElementById(
    "read-unread-buttons-container"
  );
  readUnreadButtonsContainer.innerHTML = "";

  content.links.forEach((link) => {
    const readUnreadButton = document.createElement("span");
    readUnreadButton.className = "read-unread-button";
    readUnreadButton.textContent = link.read ? "Read" : "Unread";
    if (link.read) {
      readUnreadButton.classList.add("read");
    }

    readUnreadButton.addEventListener("click", () => {
      link.read = !link.read;
      readUnreadButton.textContent = link.read ? "Read" : "Unread";
      readUnreadButton.classList.toggle("read");
    });

    readUnreadButtonsContainer.appendChild(readUnreadButton);
  });
}
