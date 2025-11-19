import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { RouterModule } from '@angular/router';

@NgModule({
  // Declaramos los componentes que pertenecen al módulo de recetas
  declarations: [RecipeListComponent, RecipeDetailComponent],
  // Importamos CommonModule (ngIf, ngFor), RouterModule y el módulo de ingredientes
  imports: [CommonModule, IngredientModule, RouterModule],
  // Exportamos por si en algún momento queremos usar estos componentes fuera
  exports: [RecipeListComponent, RecipeDetailComponent],
})
export class RecipeModule {}
