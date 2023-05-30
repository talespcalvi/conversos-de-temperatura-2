function mudarCorDeFundo() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = temperatureInput.value;

    // Conversão de temperatura
    var celsius = parseFloat(temperature);
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9 / 5) + 32;

    // Ajuste da cor de fundo
    var body = document.querySelector('body');
    var red, green, blue;

    if (celsius >= 0 && celsius <= 100) {
        // Cores quentes para temperaturas maiores
        red = 255;
        green = Math.round((celsius / 100) * 255);
        blue = 0;
    } else if (celsius < 0 && celsius >= -100) {
        // Cores frias para temperaturas menores
        red = 0;
        green = Math.round(((-celsius) / 100) * 255);
        blue = 255;
    } else {
        // Para temperaturas fora do intervalo -100°C a 100°C, define cor padrão
        red = 255;
        green = 255;
        blue = 255;
    }

    // Atualiza a cor de fundo
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Atualiza os valores dos sliders de RGB com base na temperatura
    var redInput = document.getElementById('red');
    var greenInput = document.getElementById('green');
    var blueInput = document.getElementById('blue');

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    // Atualiza o valor de temperatura convertida exibido na tela
    document.getElementById('kelvin').textContent = kelvin.toFixed(2);
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
}
