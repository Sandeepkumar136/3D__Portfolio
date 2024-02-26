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
var typing_text='Passionate frontend developer excelling in crafting visually captivating, user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and responsive design. Demonstrates exceptional problem-solving abilities and meticulous attention to detail.'
var speed=15;


function typewriter(){
    if(i<typing_text.length){
        document.getElementById("text-p-con").innerHTML += typing_text.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}
typewriter()

// window.onload = typewriter;

// #############
function CopFun() {
    navigator.clipboard.writeText("https://github.com/InstaPy/InstaPy");
    var copyButton = document.getElementById("copyfortexta");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}
function CopFuna() {
    navigator.clipboard.writeText("https://github.com/Sandeepkumar136/JavaScript_Time_CountDown");
    var copyButton = document.getElementById("copyfortextb");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}
function CopFunb() {
    navigator.clipboard.writeText("https://github.com/Sandeepkumar136/jarvesai");
    var copyButton = document.getElementById("copyfortextc");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}
function CopFunc() {
    navigator.clipboard.writeText("https://qoute-media.firebaseapp.com/");
    var copyButton = document.getElementById("copyfortextd");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}
function CopFund() {
    navigator.clipboard.writeText("https://to-do-list-975b5.firebaseapp.com/");
    var copyButton = document.getElementById("copyfortexte");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}
function CopFune() {
    navigator.clipboard.writeText("https://portfolio-1ce19.web.app/");
    var copyButton = document.getElementById("copyfortextf");
    
    // Change button text to "link copied"
    copyButton.innerHTML = "link copied";

    // Reset button text after 4 seconds
    setTimeout(function() {
        copyButton.innerHTML = "copylink";
    }, 4000);
}


// form
function SendMail(){
    var params={
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      message:document.getElementById('textarea').value
    };
    const ServiceID='service_3drrvkp';
    const templeteID='template_yltr1bw';
    emailjs.send(ServiceID,templeteID,params)
    .then(
      res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('textarea').value = '';
        console.log(res);
        alert('Your messege sent successfully')
      }
      
    )
    .catch(err=>console.log(err));
  };
