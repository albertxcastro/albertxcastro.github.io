function showOrHide() {
    var x = document.getElementById("expId");
    var btn = document.getElementById("expBtn");
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.innerHTML = "Show less";
    } else {
        x.style.display = "none";
        btn.innerHTML = "Show more";
    }
  }

function showMsc() {
    location.replace("https://stopify.co/IE1WDC")
}