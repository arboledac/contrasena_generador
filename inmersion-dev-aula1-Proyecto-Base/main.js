let cantidadInput = document.getElementById("cantidad");
let generarBoton = document.getElementById('generar');
let limpiarBoton = document.getElementById("limpiar");
let constrasenaInput = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*.()";


function generar() {

   let numeroDigitado = parseInt(cantidadInput.value);

   if (numeroDigitado < 8) {
      alert("la candidad de caracteres debe ser mayor que 8");
      return;
   }

   let password = '';
   for (let i = 0; i < numeroDigitado; i++) {

      let caracteraleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
      password += caracteraleatorio;
   }
   constrasenaInput.value = password;

}

function limpiar() {
   constrasenaInput.value = '';
   cantidadInput.value = '';
}





botong.addEventListener('click', generar);
botonl.addEventListener('click', limpiar);