
var Lotto = prompt("รวยแน่ แต่ไม่ใช่วันนี้")
console.log(Lotto)
console.log(Math.floor(Math.random() *100 ))
document.getElementById("numyou").innerHTML = Lotto
document.getElementById("lottoyou").innerHTML = Math.floor(Math.random() *100 )