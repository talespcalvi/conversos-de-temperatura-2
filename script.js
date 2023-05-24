function mudarRed(){
    var body = document.querySelector('body')
    ;

    body.style.backgroundColor = 'red'

    var temperatura = (document.getElementsById('red').value)
    
    if (temperatura > 0){
       var red = 0 + red;
       /*var green = 255 - red;
       var blue = 0;*/
       var alpha = 0.5;
    }
    else {
        var red = 0
        /*var green = 255 + red
        var blue = 0 - red*/
        var alpha = 0.8
    }

    body.style.backgroundColor =  
    `rgb(${red})`
}

function mudarGreen(){
    var body = document.querySelector('body')
    ;

    body.style.backgroundColor = 'green'

    var temperatura = (document.getElementsById('green').value)
    
    if (temperatura > 0){
       /*var red = 0 + green;*/
       var green = 255 - green;
       /*var blue = 0;*/
       var alpha = 0.5;
    }
    else {
        /*var red = 0*/
        var green = 255 + green
        /*var blue = 0 - green*/
        var alpha = 0.8
    }

    body.style.backgroundColor =  
    `rgb(${green})`
}

function mudarBlue(){
    var body = document.querySelector('body')
    ;

    body.style.backgroundColor = 'blue'

    var temperatura = (document.getElementsById('blue').value)
    
    if (temperatura > 0){
       /*var red = 0 + blue;
       var green = 255 - blue;*/
       var blue = 0;
       var alpha = 0.5;
    }
    else {
        /*var red = 0
        var green = 255 + blue*/
        var blue = 0 - blue
        var alpha = 0.8
    }

    body.style.backgroundColor =  
    `rgb(${blue})`
}