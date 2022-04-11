import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Salem';

  subjectParent:object = [
    {id:1,name:'Hari'},
    {id:2,name:'Karthi'},
    {id:3,name:'Dhivan'},
    {id:4,name:'Jagan'}
  ]
  
onBoxValueChange(paramData : any)
{
  console.log("app component : " + paramData.value);
}  
}
