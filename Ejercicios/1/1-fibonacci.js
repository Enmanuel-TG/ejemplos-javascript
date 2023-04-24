const botonFuncion = document.getElementById("BTNF");
const MInfor = document.getElementById("mInformacion");
const ipurt = document.getElementById("iValue");

function fibonacci() {
  let valor = ipurt.value;
  const Verificacion = valor.includes(".");
  console.log(Verificacion);
  if (Verificacion) {
    valor = Math.round(valor);
    alert("No Pongas decimales, igual lo redondie");
  }
  let arreglo = [];
  for (let i = 1; i <= valor; i++) {
    arreglo.push(i);
  }
  const XD = arreglo.reduce((prev, num) => prev + num);
  MInfor.innerHTML = XD;
}
botonFuncion.addEventListener("click", fibonacci);
