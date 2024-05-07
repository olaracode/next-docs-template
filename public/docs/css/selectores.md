# Guía Completa de Selectores en CSS

Los selectores en CSS son herramientas poderosas que te permiten aplicar estilos a elementos HTML de manera precisa y eficiente. Desde los selectores básicos hasta las combinaciones más avanzadas y los pseudo-selectores, esta guía te proporcionará una comprensión completa de cómo utilizarlos en tus proyectos web.

## 1. Selectores de Elementos

Los selectores de elementos son los más básicos y se utilizan para seleccionar elementos HTML en función de su nombre de etiqueta.

```css
p {
  /* Estilos para todos los elementos <p> */
}
```

## 2. Selectores de Clase

Los selectores de clase se utilizan para aplicar estilos a elementos HTML que tengan un atributo class específico.

```css
.intro {
  /* Estilos para elementos con la clase "intro" */
}
```

## 3. Selectores de ID

Los selectores de ID se utilizan para aplicar estilos a un único elemento HTML que tenga un atributo id específico.

```css
#header {
  /* Estilos para el elemento con el ID "header" */
}
```

## 4. Selectores de Atributo

Los selectores de atributo permiten seleccionar elementos HTML en función de los valores de sus atributos.

```css
input[type="text"] {
  /* Estilos para elementos <input> con type="text" */
}
```

## 5. Selectores de Descendencia

Los selectores de descendencia permiten seleccionar elementos que son descendientes directos de otro elemento específico.

```css
ul li {
  /* Estilos para elementos <li> que son descendientes directos de <ul> */
}
```

## 6. Selectores de Clase Anidados

Los selectores de clase anidados permiten aplicar estilos a elementos específicos dentro de un elemento con una clase determinada.

```css
.container .box {
  /* Estilos para elementos con la clase "box" dentro de un elemento con la clase "container" */
}
```

## 7. Selectores de Pseudo-Clase

Los pseudo-selectores permiten aplicar estilos a elementos en diferentes estados o posiciones.

```css
a:hover {
  /* Estilos para enlaces cuando se les hace hover */
}
input:focus {
  /* Estilos para inputs cuando están enfocados */
}

li:nth-child(even) {
  /* Estilos para elementos <li> pares */
}
```

## 8. Combinaciones de Selectores

Las combinaciones de selectores te permiten seleccionar elementos de manera más específica al combinar múltiples selectores.

```css
header nav ul li {
  /* Estilos para elementos <li> dentro de un <ul> dentro de un <nav> dentro de un <header> */
}

.menu-item.active {
  /* Estilos para elementos con la clase "active" dentro de elementos con la clase "menu-item" */
}
```
