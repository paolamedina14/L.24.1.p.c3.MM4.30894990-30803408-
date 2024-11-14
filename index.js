/** 
 * Articulos-A
 * En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y 
*existencia. 
*Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros. 
*Considerando que los datos se cargan en un array de objetos.(Ej. estructura de cada objeto: 
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2})
*
*se requiere una función que 
*retorne la cantidad de artículos sin existencia en un departamento dado.
*
*
*Función: cantidadArticulosSinExistencia. ++
*Parámetros: articulos (array de objetos articulo), departamento (un número). ++
*Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado. ++
*/

let cantidadArticulosSinExistencia = (Array, departamento) => {
    let nombre = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].departamento == departamento && Array) {
            nombre.push(Array[i].nombre);
        }

    }
    return nombre;
    
};

let array = [
    
{departamento: 2, nombre: "blusa", precio: 20,   existencia: 10},
{departamento: 3, nombre: "pantalon", precio: 30,   existencia: 20},
{departamento: 2, nombre: "vestido", precio: 40,   existencia: 30},
{departamento: 1, nombre: "short", precio: 15,   existencia: 0},
];

let salida = document.getElementById("salida");

salida.innerHTML = JSON.stringify(cantidadArticulosSinExistencia(array, 1));
salida.innerHTML +=
`<br><br>La cantidad de artículos sin existencia en el departamento 1 es de: ${cantidadArticulosSinExistencia(array, 1)}<br>`;
