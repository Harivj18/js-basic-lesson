import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MathsService } from '../service/maths.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  empName: string='hari';
  empId : number= 35;
  empStatus: string= 'Available';
  btnToggle: boolean = true;

  books = [{
    subName:'Software Testing',
    staffName:'boomer',
    subcode:'MG8311',
    bookStatus:'Available'
  },
  {
    subName:'Green Computing',
    staffName:'Priya',
    subcode:'GE8441',
    bookStatus:'Available'
  }
]
  @Input () subjectChild: any;
  constructor(private router:Router,public _maths:MathsService) { }

  ngOnInit(): void {
   setTimeout (() => {
     this.btnToggle = false;},1000);
   }

   show() {
    if(this.empStatus == 'Available') {
      this.empStatus = 'Not Available';
    }
    else {
      this.empStatus = 'Available'
    }
  }
  gocontact() {
    this.router.navigate(['/customerform']);
  }
  increase() {
    this._maths.add();
  }

  }


  


