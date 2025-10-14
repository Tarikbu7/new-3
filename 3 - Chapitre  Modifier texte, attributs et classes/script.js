let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Titre modifié !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "https://i.ytimg.com/vi/PChlCLWMcdw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyUwAkQ2yXqEQkiJ8_GS3wyR6_kw");
  image.setAttribute("alt", "Nouvelle image");
});
