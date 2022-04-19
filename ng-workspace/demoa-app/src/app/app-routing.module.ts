import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DummyComponent } from './dummy/dummy.component';
const routes: Routes = [
  { path:'', component:CustomerFormComponent},
  { path:'customerform', component:CustomerFormComponent},
  { path:'employeeform', component:EmployeeFormComponent},
  { path:'dummy', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
