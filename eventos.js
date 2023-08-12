var div = document.getElementById("div");
var boton = document.getElementById("boton")

div.style.backgroundColor = "rgb(88, 229, 88)";
div.style.padding = "5px";
div.style.textAlign = "center";

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

boton.addEventListener("click", function() {
    alert("Hola");
    event.stopPropagation();
});