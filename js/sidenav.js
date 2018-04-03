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