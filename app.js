function func() {
    var str = document.getElementById("myname").value;
    var str2 = document.getElementById("lover").value;

    if (str == "") {
        alert("Please Enter Your Name");
    } else if (str.length <= 2) {
        alert("Please Enter a name of minimum length 3");
    } else if (!isNaN(str)) {
        alert('Numbers are not valid');
    } else if (str2 == "") {
        alert("Please Enter Lover Name");
    } else if (str2.length <= 2) {
        alert("Please Enter a name of minimum length 3");
    } else if (!isNaN(str2)) {
        alert('Numbers are not valid');
    } else {

        var random = Math.floor(Math.random() * 101);
        document.getElementById("result").innerHTML = random + "%";
    }

}

function reset() {
    var str = document.getElementById("myname");
    str.value = null;
    var str2 = document.getElementById("lover");
    str2.value = null;
    var str3 = document.getElementById("result");
    str3.innerHTML = null;
}