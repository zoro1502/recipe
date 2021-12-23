import { RecipeServiceService } from './../../service/recipe-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { outputAst } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {


  createRecipe!: FormGroup
  linkImage!: any
  brandRecipe!: Item[]


  recipeDetail!: Recipes
  id!: number
  recipesList!: Recipes[]
  isEdit!: boolean

  constructor(private fb: FormBuilder,
    private recipeServiceService: RecipeServiceService,
    private router: Router, private route: ActivatedRoute) {


    this.createRecipe = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      description: ['', Validators.required],
      brand: this.fb.array(
        [this.fb.group({
          name: ['', Validators.required],
          amount: ['1', Validators.min(0)]
        })]
      )
    })
  }

  ngOnInit(): void {
  }

  get name() {
    return this.createRecipe.get('name') as FormControl;
  }
  get img() {

    return this.createRecipe.get('img') as FormControl
  }
  get description() {
    return this.createRecipe.get('description') as FormControl
  }
  get brand() {
    return this.createRecipe.get('brand') as FormArray
  }


  addIngedient() {

    this.brand.push(this.fb.group({
      name: ['', Validators.required],
      amount: ['1', Validators.min(0)]
    }))
  }
  handleDeleteIngredient(i: number) {
    this.brand.removeAt(i)
  }

  handleAddNewRecipe() {

    this.brandRecipe = this.brand.value
    console.log(this.brandRecipe)
    let recipe = {
      id: Math.floor(Math.random() * 1000),
      ...this.createRecipe.value
    }
    console.log(recipe)
    this.recipeServiceService.handleAddNewRecipe(recipe)

  }
  handleCancel() {
    this.recipeServiceService.handleCancel()
  }

}
