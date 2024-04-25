// const text = document.querySelector(".sec-text");

// const textload = () => {
//   setTimeout(() => {
//     text.textContent = "Front-end developer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Graphics designer";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "Web developer";
//   }, 8000);
// };
// textload();
// setInterval(textload, 12000);

//another method
 // Texts to animate
 const texts = ["Graphics designer", "Frontend developer", "Backend developer"];
 let textIndex = 0;
 let charIndex = 0;
 let isDeleting = false;

 function animateText() {
   const currentText = texts[textIndex];
   const textContainer = document.querySelector(".sec-text");

   if (isDeleting) {
     textContainer.textContent = currentText.substring(0, charIndex - 1);
     charIndex--;
   } else {
     textContainer.textContent = currentText.substring(0, charIndex + 1);
     charIndex++;
   }

   if (!isDeleting && charIndex === currentText.length + 1) {
     // Wait before start deleting
     setTimeout(() => {
       isDeleting = true;
     }, 1000);
   } else if (isDeleting && charIndex === 0) {
     // Move to the next text
     isDeleting = false;
     textIndex = (textIndex + 1) % texts.length;

     // Wait before start typing again
     setTimeout(() => {
       animateText();
     }, 500);
   }

   // Speed of typing/deleting
   const speed = isDeleting ? 300 : 200;
   setTimeout(animateText, speed);
 }

 // Start the animation
 animateText();