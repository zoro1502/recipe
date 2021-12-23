import { RecipeServiceService } from './../../service/recipe-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-recipe-item',
  templateUrl: './list-recipe-item.component.html',
  styleUrls: ['./list-recipe-item.component.css']
})
export class ListRecipeItemComponent implements OnInit {
  @Input() recipeList!:Recipes[]

  @Output() id = new EventEmitter()
  constructor(private recipeServiceService:RecipeServiceService,private router:Router) {
    
   
   }

  ngOnInit(): void {
  }
  handleAction(value:number){
    this.id.emit(value)
  }
}
