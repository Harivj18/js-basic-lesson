import { Component, OnInit } from '@angular/core';
import { MathsService } from '../service/maths.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerModel: any;
  constructor(public _maths:MathsService) { }
  fname:any;
  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email: 'hari@gmail.com'
    }
  }
  saveCustomer(customerFormGroup:any) {
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
  increase() {
    this._maths.add();
  }
  // onchange(){
  //   this.fname = this.customerModel.firstName.value();
  // }
}
