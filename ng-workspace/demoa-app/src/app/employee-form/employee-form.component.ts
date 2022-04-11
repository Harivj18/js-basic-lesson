import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { rangeValidator,emailMatchValidator } from '../my validator';
import { MathsService } from '../service/maths.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup:FormGroup ;

  empRecord: any ={
    firstName:'Hari',
    lastName: 'haran',
    email: 'hari@gmail.com',
    mobile: '6383077729'
  }
  // formOptions: AbstractControlOptions = { validators:emailMatchValidator}
  constructor(private fb: FormBuilder,public _maths:MathsService) {
    this.employeeFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName,[Validators.required,Validators.minLength(3)]],
      lastName: [this.empRecord.lastName],
      emailGroup: this.fb.group({
        email: [this.empRecord.email,[Validators.required,Validators.email]],
        confirmEmail: [this.empRecord.email,[Validators.required,Validators.email]]
      },{validators:emailMatchValidator}),
      mobile: [this.empRecord.mobile],
      sendNotification: ['email'],
      range: ['',[rangeValidator(10,20)]]
    });
   }

  ngOnInit(): void {
   
  }
get firstName() {return this.employeeFormGroup.get('firstName')!;}
get email() {return this.employeeFormGroup.get('email')!;}
get range() {return this.employeeFormGroup.get('range')!;}
get emailGroup() {return this.employeeFormGroup.get('emailGroup')!;}
get mobile() {return this.employeeFormGroup.get('mobile')!;}

loadEmployee() {
  let data = {
    firstName:'Hari',
    lastName:'haran',
  }
  this.employeeFormGroup.patchValue(data);
}

doNotification(msgtype:any) {
  if(msgtype === 'sms') {
    let mobileControl= this.employeeFormGroup.get('mobile');
    mobileControl?.setValidators([Validators.required,rangeValidator(8000000000,9999999999)])
    // mobileControl?.setValidators([Validators.required]);
    mobileControl?.updateValueAndValidity();
  }
}
increase() {
  this._maths.add();
}
}
