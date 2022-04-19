import { Component, Input, NgModule, OnChanges, OnDestroy, OnInit,DoCheck,AfterContentInit,AfterViewInit,AfterViewChecked, ViewChild,AfterContentChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent-field',
  templateUrl: './parent-field.component.html',
  styleUrls: ['./parent-field.component.css']
})
export class ParentFieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterViewInit,AfterViewChecked,AfterContentChecked {
  @Input()name:string='';
  @ViewChild(ChildComponent) viewChild!:ChildComponent;
  check:boolean=false;
    constructor() { }
    ngOnChanges() {
      console.log("parent NgOnChange called");
    }
    ngOnInit(): void {
      console.log("parent NgOninit called");
    }
    ngDoCheck(): void {
      console.log('parent NgDocheck is called');
    }
    ngAfterContentInit(): void {
      console.log("parent NgAfterContentInit called");
    }
    ngAfterContentChecked(): void {
      console.log("parent NgAfterContentChecked is called");
    }
    ngAfterViewChecked(): void {
      console.log("parent NgAfterViewChecked called")
    }
    ngAfterViewInit(): void {
      console.log("parent afterview init is called");
      setTimeout(()=>{
        this.viewChild.child="mahesh";
      },0);
    }
    ngOnDestroy(): void {
      this.name="done";
      console.log(this.name);
      console.log("parent NgOnDestroy called");
      
    }
    checking(){
      this.check=!this.check;
    }
  }