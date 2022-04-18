import { Component, Input, NgModule, OnChanges, OnDestroy, OnInit,DoCheck,AfterContentInit,AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-field',
  template: `<h1>Hello{{name1}}</h1>`,
  styleUrls: ['./parent-field.component.css']
})
export class ParentFieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit {
  @Input () name1:any='Angular';
  // @ViewChild(ChildComponent) viewchild:ChildComponent;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit is working');
    
  }

  ngOnDestroy() {
    console.log("ondestroyed is working!");
  }

  ngOnChanges(){
    console.log("onchanges is working!");
  }

  ngDoCheck(): void {
    console.log("Docheck is working!");
  }

  ngAfterContentInit(): void {
    console.log("AfterContent Init is working!");    
  }

  // ngAfterViewInit(): void {
  //   console.log("AfterViewInit is working");
  //   setTimeout(()=>{
  //     this.viewchild.child="hari";
  //   },0);
  // }
  
}
