// Login Protection
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

function selectProfile(name) {

    localStorage.setItem("profile", name);

    alert("Welcome " + name + "!");

    window.location.href = "index.html";

}