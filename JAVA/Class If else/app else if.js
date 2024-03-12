var score = prompt ("คะแนนที่ได้")
if (score >=80){
    var grade = "A"
}
    else if (score >=70){
        var grade = "B"
    }  
    else if (score >=60){
        var grade = "C"
    }
    else if (score >=50){
        var grade = "D"
    }
    else {
        var grade = "F"
    }
    document.getElementById("score").innerHTML = score
    document.getElementById("grade").innerHTML = grade