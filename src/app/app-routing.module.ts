import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRecipeComponent } from './recipe/detail-recipe/detail-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {
    path: "recipes", component: RecipeComponent, children: [
      { path: "new-recipe", component: NewRecipeComponent },
      {path:":id/detail", component:DetailRecipeComponent},
      {path:":id/edit",component:EditRecipeComponent}
    ]
  },
  { path: "", redirectTo: "recipes", pathMatch: "full" },
  { path: "shopping-list", component: ShoppingListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
