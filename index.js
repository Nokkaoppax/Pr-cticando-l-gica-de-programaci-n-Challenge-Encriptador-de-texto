function encriptar() {
    // Obtener elementos del DOM
    let texto = document.getElementById("texto").value.trim();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    // Definir la lógica de encriptación
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    // Verificar si se ingresó texto
    if (texto.length !== 0) {
      // Actualizar el valor del textarea con el texto encriptado
      document.getElementById("texto").value = textoCifrado;
      // Actualizar el mensaje de éxito y resetear el mensaje de parrafo
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      // Cambiar la imagen del muñeco
      muñeco.src = "./img/encriptado.jpg";
    } else {
      // Mostrar mensaje de error si no se ingresó texto
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    // Obtener elementos del DOM
    let texto = document.getElementById("texto").value.trim();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    // Definir la lógica de desencriptación
    let textoDesencriptado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    // Verificar si se ingresó texto
    if (texto.length !== 0) {
      // Actualizar el valor del textarea con el texto desencriptado
      document.getElementById("texto").value = textoDesencriptado;
      // Actualizar el mensaje de éxito y mostrar el texto desencriptado en el párrafo
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "Texto desencriptado: " + textoDesencriptado;
      // Cambiar la imagen del muñeco
      muñeco.src = "./img/desencriptado.jpg";
    } else {
      // Mostrar mensaje de error si no se ingresó texto
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  