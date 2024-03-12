const exchangeRates = {
  USD: 0.030,
  EUR: 0.026,
  GBP: 0.022, 
  JPY: 3.207, 
  AUD: 0.042, 
  CAD: 0.038, 
  THB: 1.000, 
}
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value)
  const fromCurrency = document.getElementById("fromCurrency").value
  const toCurrency = document.getElementById("toCurrency").value
  const resultElement = document.getElementById("output")

  // ตรวจสอบว่าสกุลเงินที่ใส่เข้ามาในฟังก์ชันมีอยู่ในอ็อบเจ็กต์ exchangeRates หรือไม่
  if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
    resultElement.value = "ไม่รู้ค่าของมึงโว้ย"
    return;
  }

  // แปลงจำนวนเงินจากสกุลเงินที่เริ่มต้นเป็นสกุลเงินปลายทาง
  const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency]
  resultElement.value = convertedAmount.toFixed(2);
}
