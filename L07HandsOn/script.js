function regexChecker() {
    var name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    let nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (name.match(nameRegex)){
        alert("Yay! Your inputs were all correct!");
    } else{
        alert("Oh no! That's an invalid format!");
    }
}