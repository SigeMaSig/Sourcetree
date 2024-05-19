const express = require('express'); /* เรียก Express มาใช้ */
const app = express(); /* สร้าง App ขึ้นมาเพื่อเก็บ Express */
const PORT = 3000; /* เลือก Port ที่จะใช้ โดยไม่ซ้ำกับ Port ที่มีอยู่ */
const path = require('path'); /* เรียก Path มาใช้ */

app.use(express.static(path.join(__dirname, '/public'))); /* ให้ Express ใช้ public ไฟล์ */

/* req ให้ไป res รับมา */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

/* Listen Server ฟัง */
app .listen(PORT, () => {
    console.log("Listening on port " + PORT);
})