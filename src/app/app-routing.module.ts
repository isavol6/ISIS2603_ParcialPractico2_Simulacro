import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

// Aquí definimos TODAS las rutas de la app
const routes: Routes = [
  // Ruta para LISTAR recetas: /recipe
  {
    path: 'recipe',
    component: RecipeListComponent
  },
  // Ruta para DETALLE de receta: /recipe/:id
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent
  },
  // Ruta por defecto: si entran a '/', redirigimos a /recipe
  {
    path: '',
    redirectTo: '/recipe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Registramos las rutas en Angular
  exports: [RouterModule]                   // Exportamos para que AppModule las use
})
export class AppRoutingModule {}
