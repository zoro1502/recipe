import { ShoppingServiceService } from './../../service/shopping-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.css']
})
export class DetailRecipeComponent implements OnInit {

  isShow: boolean = false;
  id!: number
  recipeItem!: Recipes
  brandItem!: any
  constructor(private route: ActivatedRoute,
    private recipeServiceService: RecipeServiceService,
    private router: Router,
    private shopping: ShoppingServiceService
  )
   {
    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'))
      this.recipeItem = this.recipeServiceService.getDetail(this.id)
      this.brandItem = this.recipeItem.brand
    })
    
  }

  ngOnInit(): void {
    
  }

  handleEdit(id: number) {
    this.recipeServiceService.handleEditLink(id)
  }
  handleDelete(id: number) {
    this.recipeServiceService.handleDeleteRecipe(id)
    this.router.navigate(['/recipes'])
  }
  handleShopping(brand:any) {
    
    this.shopping.handleAddToShopping(brand)
    alert("add to the shopping successfull")
   
  }

}
