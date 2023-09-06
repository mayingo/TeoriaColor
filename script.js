    const colorInput = document.querySelector('#color')
    const monocromatico = document.getElementById("coloresMono");
    const compleDiv = document.getElementById("coloresCompleDiv");
    const analogos = document.getElementById("coloresAnalogos");
    
    
      

colorInput.addEventListener('input', actualizar);

function actualizar() {
    monocromatico.innerHTML = "";
    const color = colorInput.value;
    hex.innerHTML = color;
    



    const rgbUsed = sacarRGB(color);
    crearComplement(rgbUsed);

    for (let i = 1; i < 5; i++) {
      const rgbMono = crearMonocromatico(rgbUsed, (i * 25)/100);
      console.log(rgbMono + "SHade " + monocromatico);
      crearMuestra(monocromatico,rgbMono);
  }
    
    

    


}

function sacarRGB(colorHex) {

    colorHex = colorHex.slice(1);

    // Separar la cadena en componentes R, G y B
    var r = parseInt(colorHex.slice(0, 2), 16);
    var g = parseInt(colorHex.slice(2, 4), 16);
    var b = parseInt(colorHex.slice(4, 6), 16);

    // Actualizar los elementos con los valores RGB
    document.getElementById("red").textContent = r;
    document.getElementById("green").textContent =  g;
    document.getElementById("blue").textContent = b;

    return {r, g, b}
}

function crearMonocromatico(rgb, aumento) {
  console.log(rgb + aumento);
    const rgbMono = {
        r: Math.min(255, rgb.r * (1 + aumento)),
        g: Math.min(255, rgb.g * (1 + aumento)),
        b: Math.min(255, rgb.b * (1 + aumento))
    };
    return `rgb(${rgbMono.r.toFixed(0)}, ${rgbMono.g.toFixed(0)}, ${rgbMono.b.toFixed(0)})`;
}

function crearMuestra(lugar, rgbMuestra) {
  const muestraColor = document.createElement("div");
  muestraColor.className = "cuadrado";
  muestraColor.style.backgroundColor = rgbMuestra;
  
  lugar.appendChild(muestraColor);
}

function crearComplement(rgb) {
   // Obtener los valores de los elementos 

    // Calcular los valores para los elementos 
    var redCValue = 255 - rgb.r;
    var greenCValue = 255 - rgb.g;
    var blueCValue = 255 - rgb.b;

    // Actualizar los elementos con los valores calculados
    document.getElementById("redC").textContent = redCValue;
    document.getElementById("greenC").textContent = greenCValue;
    document.getElementById("blueC").textContent = blueCValue;

    // Actualizar el color del cuadro
    var colorBox = document.getElementById("colorComplementario");
    colorBox.style.backgroundColor = `rgb(${redCValue}, ${greenCValue}, ${blueCValue})`;
    
}