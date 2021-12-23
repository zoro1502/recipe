import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private listRecipes: Recipes[] = [
    {
    id: 12344,
    name: "Hamburger",
    img: "https://kenh14cdn.com/203336854389633024/2021/3/9/photo-1-16152645286081431737598.png",
    description: "dáhjjdas",
    brand: [{
      id:1,
      name: "bread",
      amount: 5
    },
    {
      id:2,
      name:"title",
      amount:6
    }]
  }
]

  isCreated:boolean = false
  constructor(private router:Router) { }

  listRecipesSubject = new Subject()

  getListRecipes() {
    return this.listRecipes
  }
  getIsCreated(){
    return this.isCreated
  }
  
  handleCreateNewRecipe(){
    
  
    this.isCreated = !this.isCreated
    this.listRecipesSubject.next(null)
    if(this.isCreated === true){
      this.router.navigate(['recipes', 'new-recipe'])
    }else{
      this.router.navigate(['/recipes'])
    }
    
  }
  handleAddNewRecipe(recipe: any) {
    this.listRecipes.push(recipe)
    this.isCreated = !this.isCreated
    this.listRecipesSubject.next(null)
    this.router.navigate(['/recipes'])
  }
  handleDetail(value:number){
    this.listRecipesSubject.next(null)
    this.router.navigate(['recipes',value,"detail"])
  }

  handleDeleteRecipe(id: number) {
    this.listRecipes = this.listRecipes.filter(item=>item.id !== id)
    this.listRecipesSubject.next(null)
  }
  handleEditLink(value:number){
    this.listRecipesSubject.next(null)
    this.router.navigate(['/recipes',value, 'edit' ])
    
  }
  handleUpdate(value:number,recipe:any){
    let index = this.listRecipes.findIndex(item => item.id === value)
    this.listRecipes[index] = recipe
    this.listRecipesSubject.next(null)
    this.router.navigate(['/recipes'])
  }
  getDetail(id:number){
      let index = this.listRecipes.findIndex(item=>item.id === id)
      return this.listRecipes[index]
  }
  handleCancel(){
    this.isCreated = false
    console.log(this.listRecipes)
    this.listRecipesSubject.next(null);
    this.router.navigate(['recipes'])
   
  }
}
