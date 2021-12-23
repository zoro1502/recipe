import { Component, OnInit } from '@angular/core';
import { ShoppingServiceService } from '../service/shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  listShopping: Item[] =[]
  isUpdate: boolean = true

  item!:any
  constructor(private shoppingServiceService: ShoppingServiceService) {
    this.shoppingServiceService.shoppingSubject.subscribe(() => {
      this.listShopping = this.shoppingServiceService.getShopping()
      
    })
    this.listShopping = this.shoppingServiceService.getShopping()
  
  }

  ngOnInit(): void {
    console.log(this.listShopping)
  }
  handleShow(index:number){
    this.isUpdate = false
    this.item = this.shoppingServiceService.handleShow(index)
  }
}
