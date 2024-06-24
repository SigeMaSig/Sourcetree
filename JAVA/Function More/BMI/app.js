const bmiCalculator = {
  values: [],

  input(value) {
    if (value) {
      this.values.push(parseFloat(value));
    }
  },

  sum() {
    return this.values.reduce((acc, cur) => acc + cur, 0);
  },

  clear() {
    this.values = [];
  }
};

function HolyShit() {
  bmiCalculator.input(document.getElementById("weight").value);
  bmiCalculator.input(document.getElementById("height").value);
  const weight = bmiCalculator.sum();
  const height = bmiCalculator.sum();
  const result = (weight / (height / 100) ** 2).toFixed(2);
  document.getElementById("output").value = result || "Invalid input";
  bmiCalculator.clear();
}

function checkInput(e) {
  const key = e.keyCode || e.which;
  const regex = /^[0-9.]+$/;
  const str = String.fromCharCode(key);
  if (regex.test(str) || !key) return true;
  else if (key === 69 || key === 101) {
    alert("กรุณากรอกตัวเลขเท่านั้น");
  } else {
    alert("กรุณากรอกตัวเลขเท่านั้น");
  }
  return false;
}
