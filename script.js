/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// theme
function toggleTheme() {
    var body= document.body;
    var themeIcon= document.getElementById("theme-icon");
    var theme= body.classList.contains("dark-mode") ? "light" : "dark";
    body.classList.toggle("dark-mode");
    updateButton(themeIcon, theme);
    saveTheme(theme);
}
function updateButton(themeIcon, theme) {
    themeIcon.classList.remove(theme === "dark" ? "bx-moon" : "bx-sun");
    themeIcon.classList.add(theme==="dark"?"bx-sun":"bx-moon");
}
function saveTheme(theme){
    localStorage.setItem("theme", theme);
}
window.addEventListener("DOMContentLoaded",function(){
    var theme=localStorage.getItem("theme");
    var body=document.body;
    var themeIcon=document.getElementById("theme-icon");
    if(theme==="dark"){
        body.classList.add("dark-mode");
        updateButton(themeIcon, "light");
    }else{
        body.classList.remove("dark-mode");
        updateButton(themeIcon, "dark");
    }
});

var i=0;
var typing_text='Passionate frontend developer with a flair for creating visually appealing and user-friendly interfaces. Proven expertise in HTML, CSS, JavaScript, and responsive design. Exceptional problem-solving skills and a keen eye for detail.'
var speed=15;


function typewriter(){
    if(i<typing_text.length){
        document.getElementById("text-p-con").innerHTML += typing_text.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}
typewriter()