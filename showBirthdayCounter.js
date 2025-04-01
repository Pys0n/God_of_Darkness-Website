function toggleBirthdayCounter() {
    var checkbox = document.getElementById("birthdayCheck");
    var div = document.getElementById("birthdayCounter");

    if (checkbox.checked) {
        div.style.display = "table";
    } else {
        div.style.display = "none";
    }
}