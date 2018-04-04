function openNav() {
    document.getElementById("sideNav").style.width = "18vw";
    document.getElementById("sideNav").style.top = "18vw";
    document.getElementById("sideNav_hidden").style.width = "0";
    
    document.getElementById("logo_div").style.width = "18vw";
    document.getElementById("logo_div").style.height = "18vw";
    
    document.getElementById("title").style.marginLeft = "18vw";
    
    document.getElementById("main").style.marginLeft = "18vw";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.top = "13vw";
    document.getElementById("sideNav_hidden").style.width = "5vw";
    
    document.getElementById("logo_div").style.width = "13vw";
    document.getElementById("logo_div").style.height = "13vw";
    
    document.getElementById("title").style.marginLeft = "13vw";
    
    document.getElementById("main").style.marginLeft = "0";
}
