const text = document.querySelector(".sec-text");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Front-end developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Graphics designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Web developer";
  }, 8000);
};
textload();
setInterval(textload, 12000);