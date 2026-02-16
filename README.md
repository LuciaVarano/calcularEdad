# 🎲 Calcular Edad

Aplicación web simple que permite al usuario ingresar su año de nacimiento y calcular automáticamente su edad actual y si es menor de edad o mayor de edad.

---

## 📌 Descripción

Este proyecto consiste en una página web interactiva que:

- Solicita el año de nacimiento del usuario.
- Calcula la edad tomando el año actual del sistema.
- Indica si el usuario es mayor o menor de edad.
- Muestra el resultado dinámicamente en pantalla.

El objetivo principal es practicar manipulación del DOM, eventos en JavaScript y maquetado con Tailwind CSS.

---

## 🌐 Demo en producción

Podés probar la aplicación directamente desde el navegador sin necesidad de instalar nada:

👉 **Acceder al deploy:** https://luciavarano.github.io/calcularEdad/

## 🚀 Tecnologías utilizadas

- **HTML5** → Estructura de la página.
- **Tailwind CSS (CDN)** → Estilos y diseño responsive.
- **JavaScript (Vanilla JS)** → Lógica de cálculo y manipulación del DOM.

---

## 📂 Estructura del proyecto


📁 proyecto
├── index.html
└── 📁 js
└── app.js

---

## 🧠 Cómo funciona

1. El usuario ingresa su año de nacimiento en el input.
2. Al hacer clic en el botón **"Hace Click!"**, se ejecuta un evento `click`.
3. Se obtiene el año actual con:

```javascript
new Date().getFullYear()
4. Se calcula la edad restando el año ingresado.
5. Se actualiza el contenido del <h1> y el <p> según el resultado:
6. Si la edad es menor a 18 → "Sos menor de edad"
7. Si la edad es mayor o igual a 18 → "Sos mayor de edad"

---

## 🎯 Características
- Diseño centrado y responsive.
- Ícono SVG dentro del input.
- Actualización dinámica del contenido sin recargar la página.
- Interfaz simple y clara.
- Diseño responsivo

---

## ▶️ Cómo ejecutarlo localmente
1. Clonar el repositorio o descargar los archivos <git clone "https://github.com/LuciaVarano/calcularEdad.git">
2. Abrir el archivo index.html
3. Ingresar un año y porbar la funcionalidad