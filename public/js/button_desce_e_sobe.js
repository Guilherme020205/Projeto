function descepagina() {
    window.scroll({
        top: 99999999,
        left: 0,
        behavior: "smooth",
      });
}

var scrollButton = document.getElementById("scrollButton");

window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

scrollButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
