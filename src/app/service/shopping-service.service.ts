import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  listBrand: Item[] = []

  constructor() { }

  shoppingSubject = new Subject()

  getShopping() {
    return this.listBrand
  }
  handleUpdate(id: number, value: any) {
    let index = this.listBrand.findIndex(item => item.id === id)
    this.listBrand[index].name = value.name
    this.listBrand[index].amount = value.amount
    this.shoppingSubject.next(null)
  }

  handleAddToShopping(brand: any) {
    for (let i = 0; i < brand.length; i++) {
      this.listBrand.push(brand[i]) 
    }
    
  }
  handleCreate(br: any) {
    let index = this.listBrand.findIndex((item) => item.name === br.name)
    if (index !== -1) {
      this.listBrand[index].amount += br.amount
      this.shoppingSubject.next(null)
    } else {
      this.listBrand.push(br),
      this.shoppingSubject.next(null)
    }

  }
  handleShow(index: number) {
    return this.listBrand.find(item => item.id === index)
  }
  handleDelete(id: number) {

    this.listBrand = this.listBrand.filter(item => item.id !== id)

    this.shoppingSubject.next(null)
    
  }
}
