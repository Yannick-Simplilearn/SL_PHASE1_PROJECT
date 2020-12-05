//navbar dropdown
const burger = document.getElementsByClassName('burger')[0];
const navbar = document.getElementsByClassName('navbar-elements')[0];

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

//login check
function checkInput() {
    let uname = document.getElementById("uname").value;
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

const button = document.getElementById("cat-button");
button.addEventListener('click', (event) => { event.preventDefault(); });

//show blogs for selected category
function showBlog() {

    let cat = document.getElementsByClassName("category")[0].value;

    if(cat == "1") {
        if(document.getElementById("cat1")) {
        document.getElementById("cat1").style.display = "block";
        }
        if(document.getElementById("cat2")) {
        document.getElementById("cat2").style.display = "none";
        }
        if(document.getElementById("cat3")) {
        document.getElementById("cat3").style.display = "none";
        }
    }
    else if(cat == "2") {
        if(document.getElementById("cat2")) {
        document.getElementById("cat2").style.display = "block";
        }
        if(document.getElementById("cat1")) {
        document.getElementById("cat1").style.display = "none";
        }
        if(document.getElementById("cat3")) {
        document.getElementById("cat3").style.display = "none";
        }
    }
    else if(cat == "3") {
        if(document.getElementById("cat3")) {
        document.getElementById("cat3").style.display = "block";
        }
        if(document.getElementById("cat1")) {
        document.getElementById("cat1").style.display = "none";
        }
        if(document.getElementById("cat2")) {
        document.getElementById("cat2").style.display = "none";
        }
    }
    else if(cat == "all") {
        if(document.getElementById("cat1")) {
        document.getElementById("cat1").style.display = "block";
        }
        if(document.getElementById("cat2")) {
        document.getElementById("cat2").style.display = "block";
        }
        if(document.getElementById("cat3")) {
        document.getElementById("cat3").style.display = "block";
        }
    }
}

const button_new = document.getElementById("create-button");
button_new.addEventListener('click', (event) => { event.preventDefault(); });

//create new entry
function getEntryData() {

    var formData = {};
    formData.category = document.getElementById("sel-cat-new").value;
    formData.topic = document.getElementById("topic").value;
    formData.text = document.getElementById("text").value;

    return formData;
}

//create new div and insert it
function insertNewEntry(data) {
     
    let div = document.getElementById("insert");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "cat");
    let rm = document.createElement("a");
    rm.innerHTML = "DELETE ENTRY";
    rm.setAttribute("href", "#");
    rm.setAttribute("onclick", "onDelete(this)");
    rm.innerHTML = "DELETE ENTRY";
    newDiv.appendChild(rm);
    let h = document.createElement("h3");
    h.innerHTML = "BLOG CAT " + data.category;
    newDiv.appendChild(h);
    let p = document.createElement("p");
    p.innerHTML = "Topic: " + data.topic + "<br><br>" + data.text;
    newDiv.appendChild(p);
    let img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200");
    newDiv.appendChild(img);
    div.appendChild(newDiv);
}

function onDelete(obj) {

    let confirm =  window.confirm("Do you really want to delete this entry?");
    if(confirm == true) {

        let del = obj.parentElement;
        del.remove();
    }
    else {}
}

//clear form
function resetForm() {

    document.getElementById("sel-cat-new").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("text").value = "";
}

function createEntry() {

    let formData = getEntryData();
    insertNewEntry(formData);
    resetForm();
}
