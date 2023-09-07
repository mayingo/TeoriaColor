    const colorInput = document.querySelector('#color')
    const monocromatico = document.getElementById("coloresMono");
    const compleDiv = document.getElementById("coloresCompleDiv");
    const analogos = document.getElementById("coloresAnalogos");
    
    
      

colorInput.addEventListener('input', actualizar);

function actualizar() {
    monocromatico.innerHTML = "";
    compleDiv.innerHTML = "";
    const color = colorInput.value;
    hex.innerHTML = color;
    



    const rgbUsed = sacarRGB(color);
    const rgbComple = crearComplement(rgbUsed);

    for (let i = 1; i < 5; i++) {
      const rgbMono = crearMonocromatico(rgbUsed, (i * 25)/100);
      crearMuestra(monocromatico,rgbMono);
    }
    
    ComplementarioDividido(rgbComple);

    


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
    var r = 255 - rgb.r;
    var g = 255 - rgb.g;
    var b = 255 - rgb.b;

    // Actualizar los elementos con los valores calculados
    document.getElementById("redC").textContent = r;
    document.getElementById("greenC").textContent = g;
    document.getElementById("blueC").textContent = b;

    // Actualizar el color del cuadro
    var colorBox = document.getElementById("colorComplementario");
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    return {r,b,g}
}

function ComplementarioDividido(rgb) {
    const rgbD = Object.values(rgb);
    const rgbDup = Object.values(rgb);
    console.log(rgbDup);
    var min1 = Math.min(...rgbDup);
    var min2 = 0;
    console.log(min1 , rgbDup.indexOf(min1));

    rgbDup.splice(rgbDup.indexOf(min1),1);
    console.log(rgbDup);

    var diferencia = Math.abs(rgbDup[0]-rgbDup[1]);
    console.log(diferencia);

    var aumento = 0;
    valores = [true, true, true];
    if (diferencia < 50 ) {   //Solo 1 numero no cambia el "min1" (los otros colores pierden)
      console.log("Secundario");
      aumento = -75;
      valores[rgbD.indexOf(min1)] = false;

    } else {                  //Solo 1 numero no cambia "Numero mas grande" (Los otros colores ganan valor)
      console.log("Primario");
      aumento = 75;
      min2 = Math.min(...rgbDup);
      rgbDup.splice(rgbDup.indexOf(min2),1);

      valores[rgbD.indexOf(rgbDup[0])] = false;

    }
    console.log("min2 " + min2);
    console.log("final " + rgbDup);
    console.log("valores " + valores);
    //Creo varibales para los 2 colores
    var rNew1 = 0;
    var rNew2 = 0;

    var gNew1 = 0;
    var gNew2 = 0;

    var bNew1 = 0;
    var bNew2 = 0;

    
    var confirmacion = 1;

    if (valores[0]) {         //Se modifica la R
      console.log("Modif R");
      rNew1 = Math.min(255, rgb.r+(aumento*confirmacion));
      if (confirmacion == 1) {
        confirmacion = 0;
      } else {
        confirmacion = 1;
      }
      rNew2 = Math.min(255, rgb.r+(aumento*confirmacion));


    } else {                  //Se mantiene la R
      rNew1 = rgb.r;
      rNew2 = rgb.r;

    }
    if (valores[1]) {         //Se modifica G
      console.log("Modif G");
      gNew1 = Math.min(255, rgb.g+(aumento*confirmacion));
      if (confirmacion == 1) {
        confirmacion = 0;
      } else {
        confirmacion = 1;
      }
      gNew2 = Math.min(255, rgb.g+(aumento*confirmacion));


    } else {                  //Se mantiene G
      gNew1 = rgb.g;
      gNew2 = rgb.g;
    }
    if (valores[2]) {         //Se modifica B
      console.log("Modif B");
      bNew1 = Math.min(255, rgb.b+(aumento*confirmacion));
      if (confirmacion == 1) {
        confirmacion = 0;
      } else {
        confirmacion = 1;
      }
      bNew2 = Math.min(255, rgb.b+(aumento*confirmacion));


    } else {                  //Se mantiene B
      bNew1 = rgb.b;
      bNew2 = rgb.b;

    }

    
    const rgbNew1 = `rgb(${rNew1}, ${gNew1}, ${bNew1})`;
    const rgbNew2 = `rgb(${rNew2}, ${gNew2}, ${bNew2})`;
    console.log(rgbNew1);
    console.log(rgbNew2);

    crearMuestra(compleDiv,rgbNew1);
    crearMuestra(compleDiv,rgbNew2);

    


}

