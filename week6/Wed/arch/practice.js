

const q5 = document.getElementById("alert-button");  // setting  var q5 to id alert
    function clickHandler() {   //create function clickHandler run method alert with good morning
        alert("Good Morning")
    }
 q5.addEventListener("click", clickHandler);  // set eventlistner for when q5 is click and to run function click hander

const q6 = document.getElementById("add-tv-show-button");
q6.addEventListener("click", () => {
  const tv = document.getElementById("tv-shows");
  const newShow = document.createElement("li");
  newShow.innerText = "The Xfiles";
  tv.append(newShow);
});

const q7 = document.getElementById("question-7-remove-button");
q7.addEventListener("click", () => {
document.getElementById("comment-7").remove();   
});

const q8 = document.getElementById("question-8-remove-button");
q8.addEventListener("click", () => {
document.getElementById("question-8-remove-button").remove();   
});

// const q9 = document.querySelectorAll(".highlight");
//     function mouseOver() {
//     q9.style.background = "yellow";
//     q9.styel.font = "white";
//     }
//     q9.addEventListener("mouseover", mouseOver);

const q12 = document.getElementById("say-hello");
const q12b = document.getElementById("message");
const what = document.getElementById("question-13-name")
q12,addEventListener("click", () => {
q12b.innerText =(`Hello OnDina ${what}.value`);//write update q12b  

})

const q13 = document.getElementById("add-user");
q13.addEventListener("click", () => {
  const namelist = document.getElementById("users");
  const newName = document.createElement("li");
  newName.innerText = "Dinka";
  namelist.append(newName);
});

const q14 = document.getElementById("show-button");

const q14b = document.getElementById("hide-button");
q14b.style.display = "none";  
const q14c = docment.getElementById("secret-text")
q14.addEventListener("click", () => {
 q14.classList.toggle 


});






// Temp
// const q = document.getElementById("tag");
// q.addEventListener("click", () => {

