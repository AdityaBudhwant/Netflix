function signup() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");

    window.location.href = "intro.html";

}