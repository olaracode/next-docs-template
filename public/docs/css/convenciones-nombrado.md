# Convenciones de nombrado CSS

Los nombres de las clases y los selectores en CSS son una parte importante de la escritura de código limpio y mantenible. Al seguir una convención de nombrado consistente, puedes hacer que tu código sea más fácil de leer y de mantener, y ayudar a otros desarrolladores a entender tu código más rápidamente.

## BEM

BEM(Bloque, Elemento, Modificador) es una convención de nombrado popular para CSS que se centra en la estructura y la semántica de las clases. BEM divide las clases en tres categorías:

- **Bloque**: Un componente independiente que puede ser reutilizado en diferentes partes de un proyecto.

- **Elemento**: Una parte de un bloque que no tiene sentido por sí sola y que está estrechamente relacionada con el bloque.

- **Modificador**: Una variación o estado de un bloque o elemento.

```css
.Bloque__Elemento--Modificador {
}
```

### Ejemplo de BEM

```css
/* Bloque */
.card {
  /* Estilos para el bloque "card" */
}

/* Elemento */
.card__title {
  /* Estilos para el elemento "title" dentro de un bloque "card" */
}

/* Modificador */
.card--large {
  /* Estilos para un bloque "card" con la modificación "large" */
}

/* Modificador Elemento */
.card__title--small {
  /* Estilos para un elemento "title" con la modificación "small" dentro de un bloque "card" */
}
```

BEM Tambien se puede utilizar con otros lenguajes de programación como HTML y JavaScript, lo que facilita la creación de componentes reutilizables y autónomos.

Tambien se puede usar la estructura de archivos de BEM para organizar los estilos de un proyecto, dividiendo los archivos en bloques, elementos y modificadores.

## OOCSS

OOCSS (CSS Orientado a Objetos) es una metodología de diseño de CSS que se centra en la reutilización y la separación de la estructura y la apariencia de los componentes. OOCSS se basa en dos principios principales:

- **Separación de la estructura y la apariencia**: Separar la estructura de un componente de su apariencia permite reutilizar la estructura en diferentes contextos y aplicar diferentes estilos a la misma estructura.

- **Reutilización de clases**: Crear clases de estilo reutilizables que se pueden aplicar a diferentes elementos HTML para estandarizar la apariencia y el comportamiento de los componentes.

### Ejemplo de OOCSS

```css
/* Clase de estructura */
.box {
  /* Estilos para la estructura de la caja */
}

/* Clase de apariencia */
.box--blue {
  /* Estilos para una caja azul */
}

/* Clase de comportamiento */
.box:hover {
  /* Estilos para una caja cuando se le hace hover */
}
```

OOCSS se centra en la creación de clases de estilo reutilizables y modulares que se pueden combinar y reutilizar en diferentes partes de un proyecto.
