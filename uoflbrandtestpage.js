function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var title = document.getElementById("title").value;
    var department = document.getElementById("department").value;
    var officephone = document.getElementById("officephone").value;
    var mobilephone = document.getElementById("mobilephone").value;
    document.getElementById("firstlastname").innerHTML = firstname + " " + lastname;
    document.getElementById("title2").innerHTML = title;
    document.getElementById("office").innerHTML = department;
    document.getElementById("ophone").innerHTML = officephone;
    document.getElementById("mphone").innerHTML = mobilephone;
}
