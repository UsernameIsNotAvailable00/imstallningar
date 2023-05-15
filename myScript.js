window.onscroll = scrollPos;

var prevScrollPos = window.pageYOffset;
function scrollPos() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollPos = currentScrollPos;
}

function require(){
    document.getElementById("fname").required = true;
    document.getElementById("lname").required = true;
    document.getElementById("email").required = true;
    document.getElementById("phone").required = true;
    document.getElementById("mesg").required = true;
}

function sendEmail(){
    var params = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        mesg: document.getElementById("mesg").value,
    }
    if ((document.forms["contactUs"]["firstname"].value == "") || (document.forms["contactUs"]["lastname"].value == "") || (document.forms["contactUs"]["email"].value == "") || (document.forms["contactUs"]["phonenumber"].value == "") || (document.forms["contactUs"]["message"].value == "")) {
        require()
    }
    else {
    emailjs.send("service_gzkhg92","template_hiakykk", params);
    }
}

function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
}


























/*window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight; 
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint  = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}*/

