import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFieldComponent } from './parent-field/parent-field.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentFieldComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
