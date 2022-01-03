import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  //templateUrl: './first.component.html',
  template:`
  <h1>{{myCount}}</h1>
  `,
  styles: [`
  .myColor{
    color:green;
  }
  `]
})
export class FirstComponent implements OnInit {

 myCount:number =0;
myClick(){
  setInterval(()=>{
    this.myCount++;
  },1000)
}

  constructor() { }

  ngOnInit(){
   this.myClick();
  }

}
