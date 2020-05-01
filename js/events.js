document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});

let name = document.getElementById("name");
let mail = document.getElementById("mail");

name.addEventListener("input", function() {
    if (this.validity.valid) {
        this.style.border = "2px solid green";
    }
});

mail.addEventListener("input", function() {
    if (this.validity.valid) {
        this.style.border = "2px solid red";
    }
});

name.addEventListener("focus", function() {
    if (txt.value.valid === true) {
        this.style.border = "solid green 2px"
    } else {
        this.style.border = "solid red 2px"
    }
});

mail.addEventListener("focus", function() {
    this.style.border = "solid green 2px"
});

name.addEventListener("blur", function() {
    this.style.border = "solid white 2px";
    this.style.boxShadow = "0 0 5px white";
});

name.addEventListener("blur", function() {
    this.style.border = "solid white 2px";
    this.style.boxShadow = "0 0 5px white";
});



