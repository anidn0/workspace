const main = () => {

const q1 = document.getElementById("grow-me");
    q1.classList.add("big");

const q2 = document.getElementById("shrink-me");
        q2.classList.add(".big");
        
const q3 = document.querySelectorAll("li"); 
    for (let i = 0; i < q3.length; i++) {
         q3[i].style.color = "red";
         console.log(q3[i]);
      }
    
// q4 skipped
//q4 = document.links[0].href;
let q4 = document.links.namedItem("links").href;
q4.setAttribute("href", "https://www.w3schools.com");

const q5 = document.getElementById("hide-me");
    q5.style.display = "none";

const q6 = document.getElementById("show-me");
    q6.style.display = "block";

const q7 = document.getElementById('name').value;
      const h1 = document.querySelector('h1');
      h1.innerHTML = `<p>Hello</p>`;
}









//     document.write("<h1> Welcome ${name} </h1>" );
// // const q7 = document.getElementsByTagName("h1");
//       console.log(q7);
//  // q7.setAttribute("Welcome Ondina");
  
    }
