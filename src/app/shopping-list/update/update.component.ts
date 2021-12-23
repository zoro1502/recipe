import { ShoppingServiceService } from './../../service/shopping-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges {
  name!: string
  amount!: number
  @Input() isUpdate!: boolean

  @Input() item!: any
  formBrand!: FormGroup
  constructor(private fb: FormBuilder, private shopping: ShoppingServiceService) {
  


  }

  ngOnInit(): void {

    console.log(this.isUpdate)
    if (this.isUpdate === true) {
      this.formBrand = this.fb.group({
        nameBrand: ['', Validators.required],
        amountBrand: ['0', [ Validators.min(0)]]
      })
    } else {
      this.formBrand = this.fb.group({
        nameBrand: [this.item.name, Validators.required],
        amountBrand: [this.item.amount, [ Validators.min(0)]]
      })
    }
  }
  ngOnChanges() {
   
    if (this.isUpdate === true) {
      this.formBrand = this.fb.group({
        nameBrand: ['', Validators.required],
        amountBrand: ['0', [ Validators.min(0)]]
      })
    } else {

      this.formBrand = this.fb.group({
        nameBrand: [this.item.name, Validators.required],
        amountBrand: [this.item.amount, [ Validators.min(0)]]
      })
    }
  }

  get nameBrand() {
    return this.formBrand.get("nameBrand") as FormControl
  }
  get amountBrand() {
    return this.formBrand.get("amountBrand") as FormControl
  }

  handleCreateNewBrand() {
    if (this.isUpdate === true) {
      let br = {
        id: Math.floor(Math.random() * 10000),
        name: this.nameBrand.value,
        amount: this.amountBrand.value
      }
      this.shopping.handleCreate(br)
    } else {
      let br = {
        name: this.nameBrand.value,
        amount: this.amountBrand.value
      }
      this.shopping.handleUpdate(this.item.id, br)

    }
    this.isUpdate === true
    this.formBrand.reset()


  }
  handleClear() {
    if (this.isUpdate === true) {
      this.formBrand.reset()
    } else {
      this.amountBrand.setValue("0")
    }

  }
  handleDelete() {
  
    this.formBrand.reset()
    this.isUpdate = true
    this.shopping.handleDelete(this.item.id)
   
  }
}
