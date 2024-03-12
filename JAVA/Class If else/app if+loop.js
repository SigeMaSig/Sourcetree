var game = prompt ("จะเล่นกี่เกม ?")
var result = ""
for (var i=1;i<=game;i++)
{
    let user = prompt("หัว หรือ ก้อย ?")
    let ran = ""
    if (Math.floor(Math.random()*10) >=5){

        ran = "หัว"
    }
    else {
        ran = "ก้อย"
    }
    if (user == ran){

        alert ("ชนะ")
    }
    else {
        alert ("แพ้")
    }
    console.log(ran +":"+ user)

}