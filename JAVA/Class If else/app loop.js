var item = prompt ("กรอกจำนวน")
var sum = 0
    for (var i = 1; i<=item;i++)
    {
        let price = prompt ("ราคาสินค้าชิ้นที่: "+i)
        sum = sum + parseInt (price)
        document.getElementById("Price-list").innerHTML += "รายการสินค้า" + i+":" + price + "บาท" + "<br>"
        
    }
    document.getElementById("Total").innerHTML += "ราคารวม" + sum +"บาท"
        
    