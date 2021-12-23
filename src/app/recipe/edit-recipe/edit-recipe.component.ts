import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {


  editRecipe!: FormGroup
  linkImage!: any
  recipeDetail!: Recipes 
  id!: number



  constructor(private fb: FormBuilder,
    private recipeServiceService: RecipeServiceService,
    private router: Router, private route: ActivatedRoute) {
   

    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get("id"))
      this.recipeDetail = this.recipeServiceService.getDetail(this.id)
     
    })
   
    this.linkImage = this.recipeDetail.img
    this.editRecipe = this.fb.group({
      name: ["", Validators.required],
      img: ["", Validators.required],
      description: ["", Validators.required],
      brand: this.fb.array([])
    })
    
      this.name.setValue(this.recipeDetail.name)
      this.img.setValue(this.recipeDetail.img)
      this.description.setValue(this.recipeDetail.description)
      for (let i = 0; i < this.recipeDetail.brand.length; i++) {
        let brandControl = this.fb.group({
          name: [this.recipeDetail.brand[i].name, Validators.required],
          amount: [this.recipeDetail.brand[i].amount, [Validators.required,Validators.min(1)]]
        })
        this.brand.push(brandControl)
      }
    
    
  }

  ngOnInit(): void {
   
   
  }

  get name() {
    return this.editRecipe.get('name') as FormControl;
  }
  get img() {

    return this.editRecipe.get('img') as FormControl
  }
  get description() {
    return this.editRecipe.get('description') as FormControl
  }
  get brand() {
    return this.editRecipe.get('brand') as FormArray
  }


  addIngedient() {

    this.brand.push(this.fb.group({
      name: ['', Validators.required],
      amount: ['1', [Validators.required, Validators.min(1)]]
    }))
  }
  handleDeleteIngredient(i: number) {
    this.brand.removeAt(i)
  }

  handleUpdateRecipe(value:number) {
  
   let recipe = {
      id: this.id,
      ...this.editRecipe.value
    }
    this.recipeServiceService.handleUpdate(value,recipe)

  }
  handleCancel(){
    this.recipeServiceService.handleCancel()
  }

}
