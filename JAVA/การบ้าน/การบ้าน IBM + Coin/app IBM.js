var data = {
    gender : "",
    age : 0,
    high: 0 ,
    weight:0,
    bmi:0    
}
data.gender = prompt ("ชาย หรือ หญิง")
data.age =  prompt ("ใส่อายุของคุณมา")
data.high =  prompt ("ใส่น้ำส่วนสูงของคุณมา Cm.")
data.weight =  prompt ("ใส่น้ำหนักของคุณ Kg.")
data.age = parseInt(data.age)
data.high = parseFloat(data.high/100)
data.weight = parseFloat(data.weight)
data.bmi = (data.weight / (data.high**2)).toFixed(2)

if(data.bmi > 30 ){
    document.getElementById("result").innerHTML = "ผล BMI คือ อ้วนมาก"
}
    else if (data.bmi > 29.90){
        document.getElementById("result").innerHTML = "ผล BMI คือ อ้วน" 
    }
    else if (data.bmi > 24.90){
        document.getElementById("result").innerHTML = "ผล BMI คือ ท้วม" 
    }
    else if (data.bmi > 22.90){
        document.getElementById("result").innerHTML = "ผล BMI คือ ปกติ" 
    }
    else {
        document.getElementById("result").innerHTML = "ผล BMI คือ ผอม" 
    }
    document.getElementById("age").innerHTML = "อายุ: "+data.age
    document.getElementById("bmi").innerHTML = "ค่า BMI: "+data.bmi
    document.getElementById("gender").innerHTML = "เพศ: "+data.gender
    document.getElementById("high").innerHTML = "ส่วนสูง: "+data.high+ "เมตร"
    document.getElementById("weight").innerHTML = "น้ำหนัก: "+data.weight


//if (data.gender == "ชาย"){
//    if (data.high < 31.5){
 //       console.log("อ้วน")
 //   }
 //   else {
 //       console.log("ผอม")
 //   }
//}
//if (data.gender == "หญิง"){
 //   if (data.bmi < 31.5){
 //       console.log("1")
 //   }
 //   else {
 //       console.log("2")
//    }
//}

//console.log(data.bmi) 



//console.log(data.age , data.high , data.weight) 
//console.log(typeof(data.age , data.high , data.weight))