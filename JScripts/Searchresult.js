// Get the input field
const searchInput = document.querySelector('#searchForm input[type="search"]');

// Listen for the Enter key press event on the input field
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the search query from the input field and convert to lowercase
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Get all text nodes on the page
    const textNodes = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    // Iterate over each text node and highlight occurrences of the search query
    while (textNodes.nextNode()) {
      const textNode = textNodes.currentNode;
      const text = textNode.nodeValue.trim().toLowerCase(); // Convert text to lowercase
      const index = text.indexOf(searchQuery);
      if (index !== -1) {
        const before = document.createTextNode(text.substring(0, index));
        const highlight = document.createElement("span");
        highlight.textContent = text.substring(
          index,
          index + searchQuery.length
        );
        highlight.style.backgroundColor = "yellow"; // Highlight color
        const after = document.createTextNode(
          text.substring(index + searchQuery.length)
        );
        const parent = textNode.parentNode;
        parent.replaceChild(after, textNode);
        parent.insertBefore(after, parent.childNodes[0]);
        parent.insertBefore(highlight, after);
        parent.insertBefore(before, highlight);
      }
    }

    // Redirect to a search results page if necessary
    window.location.href =
      "search_results.html?q=" + encodeURIComponent(searchQuery);
  }
});
