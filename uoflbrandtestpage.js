function myFunction2() {
    var x = document.getElementById("firstname");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
    }
    document.getElementById("firstn").innerHTML = "test";
}
