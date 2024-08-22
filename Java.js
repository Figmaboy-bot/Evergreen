var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var add = this.querySelector(".add");
    var minus = this.querySelector(".minus");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      add.style.display = "inline";
      minus.style.display = "none";
    } else {
      panel.style.display = "block";
      add.style.display = "none";
      minus.style.display = "inline";
    }
  });
}
