import { RecipeServiceService } from './../service/recipe-service.service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  isCreated!:boolean

  recipeList: Recipes[] = []
  constructor(private route:Router,private recipeServiceService:RecipeServiceService) { 
      this.recipeServiceService.listRecipesSubject.subscribe(()=>{
        this.isCreated = this.recipeServiceService.getIsCreated()

        this.recipeList = this.recipeServiceService.getListRecipes()
      })  
  }

  ngOnInit(): void {
    this.recipeList = this.recipeServiceService.getListRecipes()
  }

handleCreate(){
this.recipeServiceService.handleCreateNewRecipe()
 
}
handleAction(id:number){
 this.recipeServiceService.handleDetail(id)
}
}
