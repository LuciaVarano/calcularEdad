let resultado = document.getElementById("resultado");
let year = document.getElementById("year");
let calcular = document.getElementById("calcular");
let parrafo = document.getElementById("parrafo");
let resultadoEdad = 0;


calcular.addEventListener("click", () => {
    resultadoEdad = new Date().getFullYear() - year.value;
    if (resultadoEdad < 18) {
        parrafo.textContent = `Sos menor de edad`;
        resultado.textContent = `Tenés ${resultadoEdad} años`;
    } else {
        parrafo.textContent = `Sos mayor de edad`;
        resultado.textContent = `Tenés ${resultadoEdad} años`;
    }
});
