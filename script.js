//document.body.style.background = "linear-gradient(to bottom, #d1d1d1, #a8a8a8)";
document.body.style.background = "linear-gradient(to bottom, #add8e6, #6fa3ef)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

let text = prompt("Matnni kiriting:");


let div = document.createElement("div");
div.innerHTML = text;

div.style.fontFamily = "'Poppins', sans-serif";
div.style.color = "#000";
div.style.fontSize = "68px";
div.style.fontWeight = "bold";
div.style.textAlign = "center";


document.body.appendChild(div);
