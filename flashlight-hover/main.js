//this is a sample flashlight effect

const light = document.querySelector("#light");

const handleMove = (e) => {
  light.style.translate = `${e.pageX - 250}px ${e.pageY - 250}px`;
};

document.addEventListener("mousemove", handleMove);
