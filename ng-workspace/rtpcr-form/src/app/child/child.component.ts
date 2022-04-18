import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  name1:any='Angular';
  show=false;
  constructor (){
  }
  
  toggle (){
      this.show=!this.show;      
  }

}
