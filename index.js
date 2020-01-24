
var btn = document.createElement("button");

var body = document.getElementsByTagName("body")[0];
body.append(btn);
btn.innerHTML = "CLICCA";
btn.addEventListener("click", function(){
    document.getElementById("h1").innerHTML = "CIAO COME STAI";
});