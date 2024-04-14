var header = document.getElementById("main-header");

window.addEventListener("load", function () {
  function adjustMarginTop() {
    // Get the height of the header
    var headerHeight = header.clientHeight;
    // Set the height of the div with ID 'a' to the header height
    var searchBarSection = document.querySelectorAll(
      ".fw-sticky.fw-searchbar-wrapper"
    );
    if (searchBarSection.length > 0) {
      searchBarSection[0].style.top = headerHeight + "px";
      header.style.top = 0 + "px";
    }
  }

  adjustMarginTop();

  // Attach the 'adjustMarginTop' function to the 'resize' event of the window
  window.addEventListener("resize", adjustMarginTop);

  var body = document.body;

  let header_locked = header.getAttribute("header_locked") === "true";

  if (header_locked) {
    body.setAttribute("scrolling-mode", "true");
    header.style.position = "relative";
  }
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY || window.pageYOffset;
    // console.log("Scroll Y position:", scrollY);
    // console.log("header_locked:", header_locked);

    if (header_locked) return;
    if (scrollY > 0) {
      body.setAttribute("scrolling-mode", "true");
    } else {
      // Reset the color of all elements with class ".nav-link-item" to their original color
      body.setAttribute("scrolling-mode", "false");
    }
  });

  // const workingHourOpenBtn = document.getElementById("workingHourOpenBtn");

  // // Add a click event listener to the button
  // workingHourOpenBtn.addEventListener("click", function () {
  //   var body = document.body;
  //   body.setAttribute("working-hour-banner-mode", "true");
  // });
  // const workingHourCloseBtn = document.querySelectorAll(
  //   ".working_hour_banner-close"
  // )[0];
  // function closeBanner() {
  //   var body = document.body;
  //   body.setAttribute("working-hour-banner-mode", "false");
  // }
  // // Add a click event listener to the button
  // workingHourCloseBtn.addEventListener("click", closeBanner);
});
