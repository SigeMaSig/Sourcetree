var game = prompt ("จะเล่นกี่เกม ?")
var gameStats = {win: 0,lose: 0};
for (var i=1;i<=game;i++)
{
    var user = prompt("หัว หรือ ก้อย ?")
    var ran = ""  
    if (Math.floor(Math.random()*10) >5){
        ran = "หัว"
    }
    else {
        ran = "ก้อย"
    }
    if (user == ran ){
        document.getElementById("game-list").innerHTML += i + user + " : " + ran +  "ชนะ" + "<br>"
        alert ("ชนะ")
        gameStats.win++
        }
    else {
        document.getElementById("game-list").innerHTML += i + user + " : " + ran  + "แพ้" + "<br>"
        alert ("แพ้")    
        gameStats.lose++  
    }     
}   
    document.getElementById("total_win").innerHTML += "ชนะทั้งหมด : " + gameStats.win 
    document.getElementById("total_lose").innerHTML += "แพ้ทั้งหมด : " + gameStats.lose
