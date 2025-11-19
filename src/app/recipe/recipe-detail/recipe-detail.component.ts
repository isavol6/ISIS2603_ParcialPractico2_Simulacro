import { Component, Input, OnInit } from '@angular/core';
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

  recipe: Recipe | null = null;
  maxIngredient: string = '';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    // 1. Leer el id directamente de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 2. Llamar al servicio para obtener la receta por id
    this.recipeService.getRecetaById(id).subscribe((data) => {
      this.recipe = data;
      let max = 0;
      let maxIng = '';

      for (let ing of this.recipe.ingredientes) {
        if (!isNaN(Number(ing.cantidad)) && Number(ing.cantidad) > max) {
          max = Number(ing.cantidad);
          maxIng = ing.nombre;
        }
      }
      this.maxIngredient = maxIng;
    });
}};
