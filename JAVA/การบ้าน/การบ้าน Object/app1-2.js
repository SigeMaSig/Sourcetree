var num1 = 0 ,num2 = 80 > 70 ; 
var char = prompt ("เอาข้อความของมึงมาาาาาาาาา")
var A = prompt ("เชิญลูกค้าสอบถามราคาของกาแฟได้เลย ซึ่งประกอบด้วย Latte Espresso และ Mocha")
var cafe = "";
    const Coffee = { Latte : "40" , Espresso : "30" , Mocha : "35" , }  
    
if (A == "Latte") {
    cafe = Coffee.Latte 
} else if (A == "Espresso") {
    cafe = Coffee.Espresso
} else if (A == "Mocha") {
    cafe = Coffee.Mocha
} else {
    cafe = "ไม่พบรายการกาแฟที่ถาม"
}

document.getElementById("num").innerHTML = num1 
document.getElementById("char").innerHTML = "ข้อความของมึงเป็น " + (typeof char);
document.getElementById("Boolean").innerHTML = Boolean(num2);
document.getElementById("Object").innerHTML = A +" ของมึงราคา " + cafe ;

console.log (typeof num1)
console.log (typeof char)
console.log (Boolean(num2))
console.log (typeof Coffee)