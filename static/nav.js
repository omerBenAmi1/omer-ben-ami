//nav with active page
const activePge = window.location.href;
const navList = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href == activePge){
        console.log(activePge);
        link.classList.add('active');
    }
});


//snow in home page
function createSnow() {
    const snow = document.createElement("div");
    snow.innerHTML = "*";
    snow.classList.add("snow");
    document.body.appendChild(snow);
    snow.style.left = Math.random() * 100 + "vw";

    setTimeout(() => {
        snow.remove();
    }, 6000);
  }
  window.onload =  setInterval(createSnow, 1000);
  
  //write word ufter word
var i = 0;
var speed = 80;
var txt = "לגלוש, לאכול, להנות !!!";

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("animationP").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter();


