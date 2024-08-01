function elemento() {
  const imagen = document.getElementById("imagen");
  const subtitulo = document.getElementById("subtitulo");
  const texto = document.getElementById("texto");
  const aside = document.getElementById("sidebar");
  const botonCopiar = document.getElementById("boton_copiar");

  if (imagen.style.display !== "none") {
    imagen.style.display = "none";
    subtitulo.style.display = "none";
    texto.style.display = "block";
    botonCopiar.style.display = "block";

    texto.classList.add("textoResultado");
    aside.classList.add("modificado");
  }
}

function cambioTexto(texto) {
  const text = document.getElementById("texto");
  text.textContent = texto;
}


function verificarTexto(palabra) {
  const mayusTildes = /[A-ZÁÉÍÓÚáéíóú!@#$%^&*(),.?":{}|<>]/;
  const mensajeAdvertencia = document.getElementById("mensajeAdvertencia");

  if (!mensajeAdvertencia) {
    console.error("No se encontró el elemento con id 'mensajeAdvertencia'.");
    return true;
  }

  if (mayusTildes.test(palabra)) {
    // alert("El texto contiene mayúsculas o acentos, lo cual no es válido.");
    mensajeAdvertencia.classList.add("latidos");
    return false;
  }else{
    mensajeAdvertencia.classList.remove("latidos");
    mensajeAdvertencia.style.color = '#E2E2B6';
    elemento();
    return true;
  }
}

//encriptar
  const resultados = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

function encriptado(palabra) {
  if (!verificarTexto(palabra)) {
    return "";
  }
  palabra = String(palabra);

  let resultadosPalabra = "";

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (resultados.hasOwnProperty(letra)) {
      resultadosPalabra += resultados[letra];
    } else {
      resultadosPalabra += letra;
    }
  }
  return resultadosPalabra;
}

//desencriptar
const reverso = {
  ai:"a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
};
function desencriptar(palabra) {
  if (!verificarTexto(palabra)) {
    return "";
  }
  let resultado = String(palabra);

  for (let clave in reverso){
    if (reverso.hasOwnProperty(clave)) {
      const valor = reverso[clave];
      const regex = new RegExp(clave, 'g');
      resultado = resultado.replace(regex,valor);
    }
  }
  return resultado;
}

let final ="";

function procesarTexto() {
  let textoEntrada = String(document.getElementById("ingresarTexto").value);
  final = encriptado(textoEntrada);
  document.getElementById("texto").innerText = final;
  console.log(textoEntrada);
  console.log(final);
  // elemento();
  cambioTexto(final);
  document.getElementById("ingresarTexto").value = "";
}


function reversoTexto(){
  let textoEntrada = String(document.getElementById("ingresarTexto").value);
  final = desencriptar(textoEntrada);
  document.getElementById("texto").innerText = final;
  console.log(textoEntrada);
  console.log(final);
  // elemento();
  cambioTexto(final);
  document.getElementById("ingresarTexto").value = "";
}

//Seleccionar el texto y copiar el texto con la funcion updateClipboard
document.getElementById('boton_copiar').addEventListener('click', function(){
  const textoCopiado = document.getElementById('texto').innerText;
  updateClipboard(textoCopiado);
})

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
      () => {
          console.log('Texto copiado al portapapeles con éxito');
      },
      (err) => {
          console.error('Error al copiar el texto al portapapeles', err);
      }
  );
}
