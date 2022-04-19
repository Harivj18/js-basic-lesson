import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ParentFieldComponent } from './parent-field/parent-field.component';
import { ChildComponent } from './child/child.component';
import { FormRoutingModule } from './form-routing';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,ParentFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }