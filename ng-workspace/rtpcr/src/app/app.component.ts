import { Component,OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  store:any=[];
  title='hello';

 ngOnInit(): void {}
  fg = new FormGroup({
  fname:new FormControl('',[Validators.required]),
  aadhar:new FormControl('',[Validators.required]),
  dob:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  date:new FormControl(),
  time:new FormControl(),
  lab:new FormControl('',[Validators.required]),
  report:new FormControl('',[Validators.required]),
  result:new FormControl('',[Validators.required])
})
 onSubmit(){
   console.warn(this.fg.value);
 }
 
  add(){
      console.log(this.store.push(this.fg.value));
      console.log(this.store);
      this.fg.reset();
  }

}

