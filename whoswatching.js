const username = document.getElementById("username");
const input = document.getElementById("profileInput");
const saveBtn = document.getElementById("saveBtn");

// Load saved name
username.innerText =
localStorage.getItem("profileName") || "Aditya";

// Save new name
saveBtn.onclick = function(){

    if(input.value.trim() !== ""){

        localStorage.setItem("profileName",input.value);

        username.innerText = input.value;

        input.value="";
    }

};

// Open movie page
document.getElementById("userProfile").onclick=function(){
    localStorage.setItem("loggedIn","true");
    window.location.href="index.html";
};

document.getElementById("guestProfile").onclick=function(){
    localStorage.setItem("loggedIn","true");
    window.location.href="index.html";
};