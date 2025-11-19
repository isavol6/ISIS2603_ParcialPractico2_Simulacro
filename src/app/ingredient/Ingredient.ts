export class Ingredient { //esto viene acorde al json que vamos a leer externamente
  nombre: string;
  cantidad: string;
  unidad: string;

  constructor(nombre: string, cantidad: string, unidad: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidad = unidad;
  }
}
