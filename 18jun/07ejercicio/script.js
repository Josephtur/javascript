
 function calcularTaxi() {
      const tarifaBase = 5; // 
      const costoKm = 1.2;  // 
      const kms = document.getElementById("kms").value;

      if (kms && kms > 0) {
        const total = tarifaBase + (costoKm * kms);
        document.getElementById("resultado").innerText = 
          `El precio total es €${total.toFixed(2)}`;
      } else {
        document.getElementById("resultado").innerText = 
          "Introduce un número válido de kilómetros.";
      }
    }