# Conversor de divisas

Actividad 3 de Introducción al desarrollo de aplicaciones móviles.

Erick Guillermo Valdiviezo Buezo  
Carné 25006944

Aplicación híbrida creada con Ionic Framework, HTML, CSS y JavaScript. Capacitor permite ejecutar la aplicación dentro de Android.

El título de la página es **DivisApp 25006944**.

La aplicación recibe una cantidad en quetzales y la divide entre ocho para obtener su equivalente en dólares.

## Actividad 4 de Seguridad Informática

Se aplicó la buena práctica de privacidad visual. Los montos comienzan ocultos. El botón **Mostrar montos** permite ver la cantidad ingresada y el resultado. **Ocultar montos** vuelve a cubrir el campo de entrada, el resultado en dólares y el detalle en quetzales. La conversión sigue usando la tasa de ocho quetzales por dólar.

Elegí esta práctica porque las cantidades que se consultan en un conversor pueden revelar información económica cuando otras personas observan la pantalla. El usuario puede controlar cuándo muestra los importes. El cambio se encuentra en `index.html` y en la función `actualizarPrivacidad()` de `src/main.js`.

Para comprobarlo, ingresa 25006944, convierte y observa los puntos que cubren los datos. Presiona **Mostrar montos** para ver Q25,006,944.00 y US$3,125,868.00. Finalmente, presiona **Ocultar montos** y comprueba que los dos importes y la entrada vuelven a quedar cubiertos.

Las capturas para la tarea deben incluir la barra de tareas de Windows con la fecha y la hora en la misma toma. Incluye el código de `index.html` y `src/main.js`, los montos visibles y los montos ocultos.

~~~text
25,006,944 quetzales / 8 = 3,125,868.00 dólares
~~~

## Ejecutar en el navegador

Se necesita Node.js 22.12 o posterior.

Abre una terminal dentro de la carpeta conversor-de-divisas y ejecuta estos comandos.

~~~bash
npm ci
npm start
~~~

Abre la dirección que muestre Vite. Ingresa 25006944 y presiona **Convertir a dólares**.

## Generar el APK

Instala Android Studio y, desde su SDK Manager, los paquetes Android SDK Platform 35 y Android SDK Build-Tools 35.0.0. Usa JDK 21.

En la carpeta del proyecto, ejecuta estos comandos.

~~~bash
npm ci
npm run android:sync
npm run android:open
~~~

Espera a que termine la sincronización de Gradle en Android Studio. Selecciona **Build**, **Build Bundle(s) / APK(s)** y **Build APK(s)**.

También puedes compilar desde una terminal configurada con el Android SDK.

En Windows PowerShell usa estos comandos.

~~~powershell
cd android
.\gradlew.bat assembleDebug
~~~

En Linux o macOS usa estos comandos.

~~~bash
cd android
./gradlew assembleDebug
~~~

El APK de depuración queda en android/app/build/outputs/apk/debug/app-debug.apk.

## Archivos principales

- index.html contiene la pantalla con los componentes de Ionic.
- src/main.js valida la cantidad y calcula la conversión.
- src/style.css contiene los colores, tamaños y espacios de la pantalla.
- capacitor.config.json contiene la configuración de la aplicación Android.
- android contiene el proyecto que se abre con Android Studio.
