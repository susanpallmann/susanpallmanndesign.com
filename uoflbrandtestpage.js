function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var title = document.getElementById("title").value;
    var department = document.getElementById("department").value;
    var departmenturl = document.getElementById("departmenturl").value;
    var email = document.getElementById("email").value;
    var officephone = document.getElementById("officephone").value;
    var mobilephone = document.getElementById("mobilephone").value;
    document.getElementById("firstlastname").innerHTML = firstname + " " + lastname;
    document.getElementById("title2").innerHTML = title;
    document.getElementById("office").innerHTML = department.link(departmenturl);
    document.getElementById("ophone").innerHTML = officephone.link("tel:1" + officephone);
    document.getElementById("mphone").innerHTML = mobilephone.link("tel:1" + mobilephone);
    document.getElementById("mail").innerHTML = email.link("mailto:" + email);
}
