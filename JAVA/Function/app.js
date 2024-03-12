function ToCelsius(fahrenheit){
    let value = (fahrenheit -32)*5/9
    return  value.toFixed(2)+ " C";
}

function Display(ElementID,value){
    document.getElementById(ElementID).innerHTML = value
}

function ToFahrenheit(celsius){
    let value = (celsius *5/9)+32
    return value.toFixed(2)+ " F";
}

Display("ans",ToCelsius(200))
Display("ans1",ToFahrenheit(200))