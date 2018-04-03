/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
   $("#nav").load("nav.html"); 
});

function openNav () {
    $.getScript("js/sidenav.js", openNav);
}

$(function () {
    $.getScript("//js/sidenav.js", function () {
        openNav();
        closeNav();
        console.log("Load was performed.");
    });
});

