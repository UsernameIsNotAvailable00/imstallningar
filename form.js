function require(){
    document.getElementById("fname").required = true;
    document.getElementById("lname").required = true;
    document.getElementById("email").required = true;
    document.getElementById("phone").required = true;
    document.getElementById("mesg").required = true;
}

function timespan(){
    document.getElementById("validation").style.display="none";
}

function done(){
    document.getElementById("validation").style.display="block";
    setTimeout(timespan, 5000);
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