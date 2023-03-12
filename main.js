function preload() {

}



function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    //acceder a la cámara web
    //queremos que la vista en vivo de la cámara web sea desplegada en el lienzo. Pero 
    //en el caso de p5.js, cuando se accede a la cámara web, automáticamente se crea un nuevo
     //componente para ello y la vista en vivo de la cámara web no es desplegada en el lienzo.
    video.hide();
    tint_color = "";
}


function draw() {
    image(video, 0, 0, 640, 480);
     // posición X e Y los 2 ceros . Los valores de ancho y alto son los mismos que los del lienzo porque 
    //queremos que la vista en vivo de la cámara web sea mostrada completamente }
    //en el lienzo.   
    tint(tint_color);

}


function filtro() {
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot() {
    save('student_name.png');
}


