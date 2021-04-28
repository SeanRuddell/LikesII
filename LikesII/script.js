var count = 0;
var count2 = 0;
var count3 = 0;
var toplike = document.querySelector("#top");
var midlike = document.querySelector("#mid");
var botlike = document.querySelector("#bot");

function plustop(){
    count++;
    toplike.innerHTML =  count +" like(s)";
}
function plusmid(){
    count2++;
    midlike.innerHTML = count2 +" like(s)";
}
function plusbot(){
    count3++;
    botlike.innerHTML = count3 +" like(s)";
}