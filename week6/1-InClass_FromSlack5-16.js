       
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
//document.getElementById("question-8-remove-button").remove();  // this only remove the button I needed to remove the div entire 

});

const q9 = document.querySelector(".highlight");

q9.addEventListener("mouseover", hightlight);
    function hightlight() {
    q9.style.background = "yellow";
    q9.styel.font = "white";
    }
    

const q12 = document.getElementById("say-hello");

q12.addEventListener("click", () => {

    const input = document.getElementById("question-12-name");
    const nameOP = document.getElementById("message")
    
    nameOP.innerText = (`Hello OnDina ${input.value}`);//write update q12b  

})

const q13 = document.getElementById("add-user");
q13.addEventListener("click", () => {
  const namelist = document.getElementById("users");
  const newName = document.createElement("li");  // where it goes
  newName.innerText = "Dinka";  // new
  namelist.append(newName);
});

// const q14 = document.getElementById("show-button");

// const q14b = document.getElementById("hide-button");
// q14b.style.display = "none";  
// const q14c = docment.getElementById("secret-text")
// q14.addEventListener("click", () => {
//  q14.classList.toggle 


// });
const q15 = document.getElementById('add-calc-button');
q15.addEventListener( 'click', () => {
  const x = document.getElementById('question-15-x');
  const y = document.getElementById('question-15-y');
  const p = document.getElementById('question-15-answer');
  p.innerText = parseInt(x.value) + parseInt(y.value);

});




// Temp
// const q = document.getElementById("tag");
// q.addEventListener("click", () => {

//