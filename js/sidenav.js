function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("sideNav_hidden").style.width = "0px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav_hidden").style.width = "50px";
    document.getElementById("main").style.marginLeft= "0";
}