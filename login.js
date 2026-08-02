function login() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === "" || password === "") {
        alert("Please enter Email and Password");
        return;
    }

    if (email === savedEmail && password === savedPassword) {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful");

        window.location.href = "intro.html";

    } else {

        alert("Invalid Email or Password");

    }

}