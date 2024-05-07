# Mejores Prácticas de HTML

HTML (Lenguaje de Marcado de Hipertexto) es la base de cada página web. Define la estructura y el contenido de tu sitio web, por lo que es crucial seguir las mejores prácticas para asegurar que tu sitio sea accesible, mantenible y optimizado para el rendimiento. En este post, exploraremos algunas prácticas esenciales de HTML para ayudarte a construir mejores sitios web.

## 1. Utiliza Elementos HTML Semánticos

Los elementos HTML semánticos transmiten significado y estructura tanto a los navegadores como a los desarrolladores. En lugar de utilizar etiquetas genéricas <div> o <span> para todo, utiliza elementos semánticos como <header>, <nav>, <main>, <section>, <article>, <aside> y <footer>. Esto mejora la accesibilidad y hace que tu código sea más fácil de entender y mantener.

```html
<header>
  <h1>Título del Sitio Web</h1>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>Sobre Nosotros</h2>
    <p>...</p>
  </section>
  <section>
    <h2>Nuestros Servicios</h2>
    <p>...</p>
  </section>
</main>
<footer>
  <p>© 2024 Nombre del Sitio Web. Todos los derechos reservados.</p>
</footer>
```

## 2. Optimiza para la Accesibilidad

Asegúrate de que tu HTML sea accesible para todos los usuarios, incluidos aquellos con discapacidades. Utiliza atributos alt adecuados para las imágenes, proporciona texto descriptivo para los enlaces y asegúrate de que tu sitio sea navegable utilizando solo un teclado. Herramientas como WAVE y Lighthouse pueden ayudarte a identificar y corregir problemas de accesibilidad.

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
<a href="/contacto" title="Contacto">Contacto</a>
```

## 3. Mantenlo Válido y Bien Estructurado

Escribe HTML limpio y válido siguiendo los estándares definidos por el W3C. Utiliza una buena indentación y formato consistente para hacer que tu código sea legible. Valida tu HTML utilizando herramientas en línea o extensiones de navegador para detectar errores y garantizar la compatibilidad entre diferentes navegadores.

## 4. Utiliza Archivos CSS y JavaScript Externos

Separa tus hojas de estilo CSS y archivos JavaScript de tu HTML para una mejor organización y mantenimiento. Enlaza archivos externos usando etiquetas <link> y <script> para reducir los tiempos de carga de la página y facilitar el almacenamiento en caché.

```html
<link rel="stylesheet" href="estilos.css" />
<script src="script.js"></script>
```
