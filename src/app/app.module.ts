import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';


import { UpdateComponent } from './shopping-list/update/update.component';

import { ListRecipeItemComponent } from './recipe/list-recipe-item/list-recipe-item.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { DetailRecipeComponent } from './recipe/detail-recipe/detail-recipe.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecipeComponent,
    ShoppingListComponent,
    NewRecipeComponent,
 
    DetailRecipeComponent,
    UpdateComponent,

    ListRecipeItemComponent,
    EditRecipeComponent,
    DetailRecipeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
