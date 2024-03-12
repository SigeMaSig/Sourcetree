var Lotto = prompt("รวยแน่ แต่ไม่ใช่วันนี้")
var numran = Math.floor(Math.random() *100 )
document.getElementById("usernum").innerHTML = Lotto
document.getElementById("numran").innerHTML = numran
if (Lotto == numran){
    document.getElementById("result").innerHTML = "มึงถูกหวย" 
}
    else {
        document.getElementById("result").innerHTML = "มึงถูกแดกไอโง่"
    }