//=============================
//1. CREAR EL SERVICIO RECIPE.SERVICE
//=============================
// PASO 1 – Crear el servicio: ng g s recipe/recipe

// PASO 2 – Importar HttpClientModule en app.module.ts

// PASO 3 – Definir las 2 URL externas:
//   - Una URL para la lista completa de recetas
//   - Una URL "base" para detalle (se concatena id + "/recipe.json")

// PASO 4 – Crear método getRecetas() que haga:
//   this.http.get<Recipe[]>(URL_LISTA)

// PASO 5 – Crear método getRecetaById(id):
//   Construir la URL: BASE + id + "/recipe.json"
//   this.http.get<Recipe>(URL_DETALLE)

// PASO 6 – Exportar el servicio con @Injectable y providedIn:'root'

//=============================
//2. CREAR EL MODULO DE RECETAS SOLO SON IMPORTS
//=============================

// PASO 1 – Crear carpeta recipe/
// PASO 2 – Crear módulo con ng g m recipe
// PASO 3 – Declarar RecipeListComponent y RecipeDetailComponent
// PASO 4 – Importar CommonModule (ngFor, ngIf)
// PASO 5 – Importar RouterModule para habilitar routerLink en sus HTML
// PASO 6 – Exportar los componentes si se necesitan fuera


//=============================
//3. ROUTING GENERAL
//=============================

// PASO 1 – Definir ruta para listar recetas: path: "recipe", component: RecipeListComponent

// PASO 2 – Definir ruta para detalle: path: "recipe/:id", component: RecipeDetailComponent

// PASO 3 – Definir ruta por defecto:  path: "", redirectTo: "/recipe", pathMatch: "full"

// PASO 4 – Registrar RouterModule.forRoot(routes)

//=============================
//4. COMPONENTE LISTA 
//=============================

// PASO 1 – Declarar arreglo recipes: Recipe[] = []

// PASO 2 – Inyectar el RecipeService en el constructor

// PASO 3 – En ngOnInit(): llamar getRecipes()

// PASO 4 – Crear función getRecipes():
//        recipeService.getRecetas().subscribe(data => this.recipes = data)

// PASO 5 – No guardar receta seleccionada aquí (eso era cuando no usamos rutas)


//=============================
//5. html de lISTA
//=============================
// PASO 1 – Título: “Recetas uniandes”

// PASO 2 – Crear un contenedor tipo grid para las cards

// PASO 3 – Hacer *ngFor="let r of recipes"

// PASO 4 – Dentro de cada card mostrar:
//      - Imagen r.imagen
//      - Nombre r.nombre
//      - Tres primeros ingredientes: r.ingredientes.slice(0,3)
//      - Porciones: r.porciones
//      - Cantidad de ingredientes: r.ingredientes.length    ← (Punto 4)

// PASO 5 – Botón: routerLink ["/recipe", r.id]

// Esa navegación cambia la URL y cumple el enunciado.


//=============================
//6. COMPONENTE DETALLE
//=============================
// PASO 1 – Inyectar ActivatedRoute para leer el id de la URL

// PASO 2 – En ngOnInit(): llamar getRecipe()

// PASO 3 – En getRecipe():
//        const id = Number(route.snapshot.paramMap.get("id"))

// PASO 4 – Llamar recipeService.getRecetaById(id).subscribe(data => recipe = data)

// PASO 5 – Calcular ingrediente con mayor cantidad:
//        - Recorrer recipe.ingredientes
//        - Convertir ing.cantidad a Number()
//        - Ignorar NaN
//        - Quedarse con el mayor
//        - Guardarlo en una variable maxIngredient

// PASO 6 – maxIngredient se mostrará en el HTML

// Esto cumple la parte 2 del Punto 4 del parcial.


//=============================
//7. html de DETALLE
//=============================

// PASO 1 – Mostrar título “Recetas uniandes”

// PASO 2 – Estructura en 2 columnas:
//        - Columna izquierda: imagen grande
//        - Columna derecha: datos

// PASO 3 – Mostrar los campos:
//        nombre
//        porciones
//        tiempo_minutos
//        dificultad
//        tipo

// PASO 4 – Encabezado: Ingredientes
// PASO 5 – Mostrar: “Ingrediente más usado: {{ maxIngredient }}”  ← (Punto 4)

// PASO 6 – Listado completo de ingredientes en <ul>
// PASO 7 – Listado de pasos en <ol>

// PASO 8 – Botón para regresar: routerLink="/recipe"

// Esto cumple el enunciado EXACTAMENTE.


//=============================
//resumen

// 1. Creo modelos (Recipe, Ingredient)
// 2. Creo el servicio con sus 2 URL y GETs
// 3. Creo módulo RecipeModule (ordenar componentes)
// 4. Creo RecipeListComponent y RecipeDetailComponent
// 5. Configuro routing:
//        /recipe y /recipe/:id
// 6. En RecipeList → llamar servicio, llenar array, mostrar cards
// 7. Botón con routerLink hacia /recipe/id
// 8. En RecipeDetail → leer id desde ActivatedRoute
// 9. Llamar getRecetaById
// 10. Calcular maxIngredient
// 11. Mostrar todo en el HTML del detalle
// 12. CSS para que se vea como las imágenes del enunciado

// Y listo: puntaje completo.
