function mudarCorDeFundo() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;

    var celsius = parseFloat(temperature);
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9 / 5) + 32;

    var body = document.querySelector('body');
    var red, green, blue;

    if (celsius >= 0 && celsius <= 100) {
        red = 255;
        green = Math.round((celsius / 100) * 255);
        blue = 0;
    } else if (celsius < 0 && celsius >= -100) {
        red = 0;
        green = Math.round(((-celsius) / 100) * 255);
        blue = 255;
    } else {
        red = 255;
        green = 255;
        blue = 255;
    }

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    var redInput = document.getElementById('red');
    var greenInput = document.getElementById('green');
    var blueInput = document.getElementById('blue');

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    document.getElementById('kelvin').textContent = kelvin.toFixed(2);
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
}
