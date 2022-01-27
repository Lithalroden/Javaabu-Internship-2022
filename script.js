document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

var rootElement = document.documentElement

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ( ( rootElement.scrollTop / scrollTotal ) > 0.95 ) {
    document.querySelector(".scroll-btn").classList.add("showBtn")
  } else {
    document.querySelector(".scroll-btn").classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)