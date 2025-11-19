import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecetas().subscribe((data) => {
      this.recipes = data;
    });
  }
  
}
