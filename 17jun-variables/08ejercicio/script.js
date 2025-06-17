    function calcularHipotenusa() {
      const a = parseFloat(document.getElementById("catA").value);
      const b = parseFloat(document.getElementById("catB").value);
      const c = Math.sqrt(a * a + b * b);
      document.getElementById("resHipotenusa").textContent = `Hipotenusa: ${c.toFixed(2)}`;
    }

    function convertirMillas() {
      const km = parseFloat(document.getElementById("km").value);
      const millas = km * 0.621371;
      document.getElementById("resMillas").textContent = `${km} km = ${millas.toFixed(2)} mi`;
    }

    function calcularVolumen() {
      const r = parseFloat(document.getElementById("radio").value);
      const h = parseFloat(document.getElementById("altura").value);
      const volumen = Math.PI * r * r * h;
      document.getElementById("resVolumen").textContent = `Volumen: ${volumen.toFixed(2)} unidades³`;
    }

    function calcularIMC() {
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("alturaIMC").value);
      const imc = peso / (altura * altura);
      document.getElementById("resIMC").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
    }

    function verificarParImpar() {
      const num = parseInt(document.getElementById("numeroParImpar").value);
      const esPar = num % 2 === 0;
      document.getElementById("resParImpar").textContent = esPar ? "Es PAR" : "Es IMPAR";
    }