import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {

  // Aquí guardamos la receta que llega del servicio
  recipe: Recipe | null = null;

  // Aquí vamos a guardar el nombre del ingrediente con mayor cantidad
  maxIngredient: string = '';

  // Inyectamos el servicio y el ActivatedRoute para leer el id de la URL
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    // 1. Leer el id directamente desde la URL: /recipe/:id
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 2. Llamar al servicio para obtener la receta por id
    this.recipeService.getRecetaById(id).subscribe((data) => {
      this.recipe = data;

      // 3. Calcular el ingrediente con mayor cantidad (ignorando unidades)
      let max = 0;
      let maxIng = '';

      for (let ing of this.recipe.ingredientes) {
        // Convertimos el texto de cantidad a número
        const cant = Number(ing.cantidad);

        // Ignoramos valores NaN, comparamos y guardamos el máximo
        if (!isNaN(cant) && cant > max) {
          max = cant;
          maxIng = ing.nombre;
        }
      }

      // 4. Guardamos el nombre para mostrarlo en el HTML
      this.maxIngredient = maxIng;
    });
  }
}
