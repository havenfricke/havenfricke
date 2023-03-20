var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = `-116px`;
  }
  prevScrollpos = currentScrollPos;
}

