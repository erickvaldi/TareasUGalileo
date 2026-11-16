import '@ionic/core/css/core.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';
import './style.css';

// Ionic carga sus componentes desde los archivos incluidos en la aplicación.
const rutaIonic = new URL('./ionic/ionic.esm.js', document.baseURI).href;
import(/* @vite-ignore */ rutaIonic);

const formulario = document.getElementById('formulario-conversion');
const entradaQuetzales = document.getElementById('cantidad-quetzales');
const mensajeError = document.getElementById('mensaje-error');
const resultado = document.getElementById('resultado');
const cantidadDolares = document.getElementById('cantidad-dolares');
const detalleConversion = document.getElementById('detalle-conversion');
const tipoCambio = 8;

const formatoQuetzales = new Intl.NumberFormat('es-GT', {
  style: 'currency',
  currency: 'GTQ',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatoDolares = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const textoCantidad = String(entradaQuetzales.value ?? '').trim();
  const quetzales = Number(textoCantidad);

  if (textoCantidad === '' || !Number.isFinite(quetzales) || quetzales < 0) {
    resultado.hidden = true;
    mensajeError.textContent = 'Ingresa una cantidad válida igual o mayor que cero.';
    mensajeError.hidden = false;
    entradaQuetzales.setFocus();
    return;
  }

  // Para convertir quetzales a dólares, se divide la cantidad entre ocho.
  const dolares = quetzales / tipoCambio;

  mensajeError.hidden = true;
  cantidadDolares.textContent = 'US$' + formatoDolares.format(dolares);
  detalleConversion.textContent = formatoQuetzales.format(quetzales) + ' ÷ 8';
  resultado.hidden = false;
});

entradaQuetzales.addEventListener('ionInput', function () {
  resultado.hidden = true;
  mensajeError.hidden = true;
});
