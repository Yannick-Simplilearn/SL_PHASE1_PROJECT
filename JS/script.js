//navbar dropdown
const burger = document.getElementsByClassName('burger')[0];
const navbar = document.getElementsByClassName('navbar-elements')[0];

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

//login check
function checkInput() {
    var uname = document.getElementById("uname").value;
    let pw = document.getElementById("pw").value;

    if(uname.length == 0 && pw.length == 0) {
        document.getElementById("validate").innerHTML = "Username and Password is required";
        return false;
    }else if(pw.length == 0){
        document.getElementById("validate").innerHTML = "Password is required";
        return false;
    }else if(uname.length == 0){
        document.getElementById("validate").innerHTML = "Username is required";
        return false;
    }
}

