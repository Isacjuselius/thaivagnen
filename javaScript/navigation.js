function onButton(element){
    element.querySelector('a').style.color = "rgba(72, 86, 51, 0.5)"; //Ljusare text
    element.querySelector('a').style.transform = "scale(1.1)"; //Större text
    element.querySelector('a').style.transition = "all 0.2s ease-in-out"; //liten animation 
}

function offButton(element){
    element.querySelector('a').style.color = "";
    element.querySelector('a').style.transform = "";
    element.querySelector('a').style.transition = "all 0.2s ease-in-out";
}