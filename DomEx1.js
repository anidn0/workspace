const main = () => {
//  Add the "big" class to the "grow-me" paragraph.
const q1 = document.getElementById("grow-me");
    q1.classList.add("big");
//Remove the "big" class from the "shrink-me" paragraph.
const q2 = document.getElementById("shrink-me");
    q2.classList.remove("big");
// Find all the <li>s and log their text content to the console.
const q3 = document.querySelectorAll("li"); 
    for (let i = 0; i < q3.length; i++) {
         q3[i].style.color = "red";
         console.log(q3[i]);
      }
    
// q4 skipped
//q4 = document.links[0].href;
let q4 = document.links.namedItem("links").href;
q4.setAttribute("href", "https://www.w3schools.com");

// Set the "display" CSS property of the "hide-me" paragraph to "none".
const q5 = document.getElementById("hide-me");
    q5.style.display = "none";

const q6 = document.getElementById("show-me");
    q6.style.display = "block";

const q7 = document.getElementById("name");
document.write("<h1> Welcome ${name} </h1>" );
// const q7 = document.getElementsByTagName("h1");
      console.log(q7);
 // q7.setAttribute("Welcome Ondina");
  
    }
