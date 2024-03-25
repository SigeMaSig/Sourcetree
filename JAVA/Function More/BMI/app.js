const bmiarray = {
    DataUser: [],
    InputData(data) {
        if (typeof data == 'number' ) {
            this.DataUser.push(data);
        }

    },
    calculateBMI() {
        if (this.DataUser.length === 2) { 
            const height = this.DataUser[1] / 100;
            const weight = this.DataUser[0];
            const bmi = weight / (height ** 2);
            return bmi.toFixed(2);
        } else {
            return null;
        }
    },
};

function InputByUser() {
    const weightDataUser = parseFloat(document.getElementById("weight").value);
    const heightDataUser = parseFloat(document.getElementById("height").value);

    bmiarray.InputData(weightDataUser);
    bmiarray.InputData(heightDataUser);

    const bmi = bmiarray.calculateBMI();
    if (bmi !== null) {
        document.getElementById("output").value = bmi;
    } else if (bmi == null){
        document.getElementById("output").value = "ใส่ค่ามาไม่ครบ";
       
    }
    bmiarray.DataUser = []
}
