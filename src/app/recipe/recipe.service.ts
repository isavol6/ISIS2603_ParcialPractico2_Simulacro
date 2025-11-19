import { Injectable } from '@angular/core';
//cree el servicio con ng g s recipe/recipe
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //ACA voy a definir las URL externas como constantes

  private baseListUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json'
  private baseDetailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/'//falta concatenar id y /recipe.json
   
  constructor(private http: HttpClient) { } //cliete en mi constructor

  //metodo para obtener la lista de recetas
  getRecetas(): Observable <Recipe[]>{
    return this.http.get<Recipe[]>(this.baseListUrl);
  }

  //metodo para obtener una receta por id
  getRecetaById(id: number): Observable <Recipe>{
    const url = `${this.baseDetailUrl}${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}
