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
    // aside.style.height = "59rem";
    // aside.style.justifyContent = "flex-start";
    // aside.style.width = "25rem";
  }
}

function cambioTexto(texto) {
  const text = document.getElementById("texto");
  text.textContent = texto;
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
  elemento();
  cambioTexto(final);
  document.getElementById("ingresarTexto").value = "";
}
// document.getElementById("encriptar").addEventListener("click", function () {
//   elemento();
//   cambioTexto(final);
// });

function reversoTexto(){
  let textoEntrada = String(document.getElementById("ingresarTexto").value);
  final = desencriptar(textoEntrada);
  document.getElementById("texto").innerText = final;
  console.log(textoEntrada);
  console.log(final);
  elemento();
  cambioTexto(final);
  document.getElementById("ingresarTexto").value = "";
}
// document.getElementById("desencriptar").addEventListener("click", function () {
//   elemento();
//   cambioTexto(final);
// });
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
