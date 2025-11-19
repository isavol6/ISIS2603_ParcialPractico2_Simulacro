import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'               // Hace que el servicio sea singleton y se pueda inyectar en toda la app
})
export class RecipeService {

  // URL con la lista de TODAS las recetas (la del enunciado)
  private baseListUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  // URL base para detalle: luego concatenamos /id/recipe.json
  private baseDetailUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/';

  // Inyectamos HttpClient para poder hacer peticiones HTTP
  constructor(private http: HttpClient) {}

  // Paso 1: función para listar recetas (GET a la URL de lista)
  getRecetas(): Observable<Recipe[]> {
    // devolvemos un Observable<Recipe[]> que el componente se suscribe
    return this.http.get<Recipe[]>(this.baseListUrl);
  }

  // Paso 2: función para obtener detalle por id
  getRecetaById(id: number): Observable<Recipe> {
    // armamos la URL: base + id + /recipe.json (tal como pide el enunciado)
    const url = `${this.baseDetailUrl}${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}
