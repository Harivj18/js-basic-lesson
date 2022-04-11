import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { AppHeaderComponent } from './app.header.component';
import { AppFooterComponent } from './app.footer.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { DummyComponent } from './dummy/dummy.component';
import { MathsService } from './service/maths.service';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { TabComponent } from './tab/tab.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component';
const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"news",component:NewsComponent},
  {path:"books",component:BookCatlogComponent},
  {path:"addBook",component:BookformComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BoxaComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    BookListComponent,
    DummyComponent,
    PriceDiscountPipe,
    BookComponent,
    BookCatlogComponent,
    TabComponent,
    NewsComponent,
    MenuComponent,
    BookformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
