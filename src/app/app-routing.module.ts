import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

const routes: Routes = [
  //Listar rectas
  {
    path:'recipe', component: RecipeListComponent
  },
  //Detalle de receta
  {
    path:"recipe/:id", component: RecipeDetailComponent
  },
  //Ruta por defecto, redirige a /recipe
  {
    path:'', redirectTo:'/recipe', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
