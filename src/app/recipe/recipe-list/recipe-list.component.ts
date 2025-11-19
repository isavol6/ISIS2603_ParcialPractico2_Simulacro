import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  // Aquí vamos a guardar las recetas que llegan desde el servicio
  recipes: Recipe[] = [];
  
  // Inyectamos el servicio para poder llamar a getRecetas()
  constructor(private recipeService: RecipeService) {}

  // Hook que se ejecuta una vez cuando el componente se crea
  ngOnInit() {
    this.getRecipes();
  }

  // Lógica para llamar al servicio y llenar el arreglo recipes
  getRecipes(): void {
    // Nos suscribimos al Observable que devuelve el servicio
    this.recipeService.getRecetas().subscribe((data) => {
      // Cuando llega la respuesta, actualizamos la lista
      this.recipes = data;
    });
  }
}

