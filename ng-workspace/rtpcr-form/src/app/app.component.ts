import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  store:any=[];
  fg=new FormGroup({fname:new FormControl()});
  // fname = new FormControl('  ',[Validators.required]);
  // aadhar = new FormControl('123',[Validators.required,Validators.minLength(3)]);
  // gender = new FormControl('male',[Validators.required]);
  // dob =new FormControl(' ',[Validators.required]);
  // city = new FormControl(' ',[Validators.required]);
  // date =new FormControl(' ',[Validators.required]);
  // time =new FormControl(' ',[Validators.required]);
  // lab = new FormControl(' ',[Validators.required]);
  // report = new FormControl(' ',[Validators.required]);
  // result = new FormControl(' ',[Validators.required]);
  // title = 'rtpcr-form';

  // // saveForm() {
  // //   console.log('fname error',this.fname.errors);
  // //   console.log('fname valid',this.fname.valid);
  // //   console.log('aadhar error',this.aadhar.errors);
  // //   console.log('aadhar valid',this.aadhar.valid);
  // //   console.log('aadhar error',this.gender.errors);
  // //   console.log('gender valid',this.gender.valid);
  // //   console.log('gender valid',this.gender.valid);
  // //   console.log('city valid',this.city.valid);
  // //   console.log('city valid',this.city.valid);
  // //   console.log('lab valid',this.lab.valid);
  // //   console.log('lab valid',this.lab.valid);
  // //   console.log('report valid',this.report.valid);
  // //   console.log('report valid',this.report.valid);
  // //   console.log('result valid',this.result.valid);
  // //   console.log('result valid',this.result.valid);
  // // }
  // add(){
  //   console.log(this.store.push(this.fname.value));
  //   // console.log(this.dob.value);
  //   // console.log(this.gender.value);
  //   // console.log(this.city.value);
  //   // console.log(this.date.value);
  //   // console.log(this.time.value);
  //   // console.log(this.lab.value);
  //   // console.log(this.report.value);
  //   // console.log(this.result.value);
  //   // console.log(this..value);
  //   // console.log(this..value);
  //   // console.log(this..value);
  // }
}
