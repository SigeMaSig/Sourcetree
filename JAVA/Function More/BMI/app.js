const bmiarray = {
    values: [],
    input(values) {
        if (values) {
            this.values.push(parseFloat(values));
        }
    },
    SumBMI() {
        if (this.values.length === 2) {
            const weight = this.values[0];
            const height = this.values[1];
            const bmi = weight / ((height / 100) ** 2);
            return bmi.toFixed(2);
        } else {
            return "อีสัสเอ้ยยยยยยยย";
        }
    }
};
function HolyShit(){
bmiarray.input(document.getElementById("weight").value);
bmiarray.input(document.getElementById("height").value);

const total = bmiarray.calculateBMI();
document.getElementById("output").value = total
bmiarray.values = []
}
