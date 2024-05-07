# Metodos de Arrays

## Map

El método map crea un nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento del arreglo original. La función proporcionada recibe el elemento actual del arreglo como argumento y puede devolver cualquier valor.

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number ** 2);
console.log(squares); // [1, 4, 9, 16, 25]
```

En este ejemplo, el método **map se utiliza para calcular el cuadrado** de cada número en el arreglo numbers. La función proporcionada (number) => number \*\* 2 eleva cada número al cuadrado y devuelve el resultado.

## Filter

El método filter() crea un nuevo arreglo con todos los elementos que pasan una condición dada por una función de prueba.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

En este ejemplo, filter() recorre cada elemento del arreglo numbers y aplica la función de flecha que verifica si cada número es par, creando un nuevo arreglo llamado evenNumbers que solo contiene los números pares.

## Find

El método find() devuelve el primer elemento del arreglo que cumple con la condición dada por una función de prueba

```js
const fruits = ["apple", "banana", "orange"];
const banana = fruits.find((fruit) => fruit === "banana");
console.log(banana); // 'banana'
```

En este ejemplo, find() recorre cada elemento del arreglo fruits y devuelve el primer elemento que es igual a 'banana'.

## Reduce

El método reduce() ejecuta una función reductora sobre cada elemento del arreglo, devolviendo un único valor de salida.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15
```

En este ejemplo, reduce() suma todos los elementos del arreglo numbers. La función de flecha proporcionada recibe dos argumentos: el acumulador y el elemento actual del arreglo. En cada iteración, el acumulador se actualiza sumando el elemento actual. El segundo argumento de reduce() es el valor inicial del acumulador, en este caso 0.

## forEach

El método forEach() ejecuta una función proporcionada una vez por cada elemento del arreglo.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number));
// 1
// 2
// 3
// 4
// 5
```

En este ejemplo, forEach() recorre cada elemento del arreglo numbers y ejecuta la función de flecha proporcionada, que imprime cada número en la consola.

## Some

El método some() verifica si al menos un elemento del arreglo cumple con la condición dada por una función de prueba.

```js
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // true
```

En este ejemplo, some() verifica si al menos un número en el arreglo numbers es par. La función de flecha proporcionada devuelve true si el número es par, lo que hace que hasEvenNumber sea true.

## Every

El método every() verifica si todos los elementos del arreglo cumplen con la condición dada por una función de prueba.

```js
const numbers = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // false
```

En este ejemplo, every() verifica si todos los números en el arreglo numbers son pares. La función de flecha proporcionada devuelve true si el número es par, lo que hace que allEvenNumbers sea false.

## Includes

El método includes() verifica si un arreglo incluye un elemento determinado y devuelve true o false según el caso.

```js
const numbers = [1, 2, 3, 4, 5];
const hasNumberThree = numbers.includes(3);
console.log(hasNumberThree); // true
```

En este ejemplo, includes() verifica si el número 3 está presente en el arreglo numbers y devuelve true si es así.

## Sort

El método sort() ordena los elementos de un arreglo y devuelve el arreglo ordenado. Por defecto, la ordenación se realiza en orden alfabético/numérico ascendente.

```js
const fruits = ["banana", "apple", "orange"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // ['apple', 'banana', 'orange']
```

En este ejemplo, sort() ordena los elementos del arreglo fruits en orden alfabético ascendente.

## Reverse

El método reverse() invierte el orden de los elementos de un arreglo y devuelve el arreglo invertido.

```js
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [5, 4, 3, 2, 1]
```

En este ejemplo, reverse() invierte el orden de los elementos del arreglo numbers.

## Concat

El método concat() se utiliza para combinar dos o más arreglos y devolver un nuevo arreglo con los elementos combinados.

```js
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]
```

En este ejemplo, concat() combina los arreglos numbers y moreNumbers en un nuevo arreglo llamado combinedNumbers.

## Slice

El método slice() devuelve una copia superficial de una porción de un arreglo en un nuevo arreglo. Se puede especificar un rango de índices para seleccionar elementos específicos.

```js
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]
```

En este ejemplo, slice(1, 4) devuelve una copia de los elementos del arreglo numbers desde el índice 1 (inclusive) hasta el índice 4 (exclusivo).

## Splice

El método splice() cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.

```js
const numbers = [1, 2, 3, 4, 5];
const removedNumbers = numbers.splice(1, 3);
console.log(removedNumbers); // [2, 3, 4]
console.log(numbers); // [1, 5]
```

En este ejemplo, splice(1, 3) elimina 3 elementos del arreglo numbers, comenzando en el índice 1, y devuelve los elementos eliminados.
