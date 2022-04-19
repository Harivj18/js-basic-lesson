import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentFieldComponent } from './parent-field/parent-field.component';
const routes: Routes = [
    {path:'parent',component:ParentFieldComponent},
  {path:'child',component:ChildComponent},
  {path:'child/:id/:name',component:ChildComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }