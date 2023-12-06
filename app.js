var elementToHide = document.getElementById("shape5");
console.log("hi");
// Define the scroll threshold
var scrollThreshold = 320; // Adjust this value based on your needs

// Add a scroll event listener
window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Check if the scroll position is beyond the threshold
  if (scrollPosition > scrollThreshold) {
    // Add the 'hide' class to the element
    elementToHide.classList.add("hide");
  } else {
    // Remove the 'hide' class if the scroll position is within the threshold
    elementToHide.classList.remove("hide");
  }
});
