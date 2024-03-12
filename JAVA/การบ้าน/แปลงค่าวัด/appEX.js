function convertUnits() {
    const inputValue = parseFloat(document.getElementById('input').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;
    switch (fromUnit) {
      case 'meter':
        result = convertMeter(inputValue, toUnit);
        break;
      case 'centimeter':
        result = convertCentimeter(inputValue, toUnit);
        break;
      case 'inch':
        result = convertInch(inputValue, toUnit);
        break;
      case 'kilometer':
        result = convertKilometer(inputValue, toUnit);
        break;
      default:
        result = 'Invalid from unit';
    }

    document.getElementById('result').value = result;
  }

  function convertMeter(value, toUnit) {
    const conversions = {
      meter: value,
      centimeter: value * 100,
      inch: value * 39.3701,
      kilometer: value / 1000
    };
    return conversions[toUnit];
  }

  function convertCentimeter(value, toUnit) {
    const conversions = {
      meter: value / 100,
      centimeter: value,
      inch: value / 2.54,
      kilometer: value / 100000
    };
    return conversions[toUnit];
  }

  function convertInch(value, toUnit) {
    const conversions = {
      meter: value * 0.0254,
      centimeter: value * 2.54,
      inch: value,
      kilometer: value * 0.0000254
    };
    return conversions[toUnit];
  }

  function convertKilometer(value, toUnit) {
    const conversions = {
      meter: value * 1000,
      centimeter: value * 100000,
      inch: value * 39370.1,
      kilometer: value
    };
    return conversions[toUnit];
  }
