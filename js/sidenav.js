function openNav() {
    document.getElementById("sideNav").style.width = "20%";
    document.getElementById("sideNav_hidden").style.width = "0";
    document.getElementById("main").style.marginLeft = "20%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav_hidden").style.width = "5%";
    document.getElementById("main").style.marginLeft= "0";
}
/*
$(window).on('load', function () {
    alert("window loaded");
    var offsetHeight = document.getElementById('myDiv').offsetHeight;
   //var height = $("logo_div").Height();
   alert (("to") + offsetHeight);
   //document.getElementById("sideNav_hidden").style.height = height;
   $("#sideNav_hidden").top(height + "px");
});
*/