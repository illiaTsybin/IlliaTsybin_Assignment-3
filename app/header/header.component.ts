import { Component, OnInit } from '@angular/core';
import { Tsybin } from "../Tsybin";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 ITsybin : Tsybin =
  {sassign:" Assignment#3 " ,
  sid:9914701025 , 
  sname:" Illia_Tsybin ",
  slogin:" tsybin " ,
  scampus:" Trafalgar "};

  constructor() {
  
   }

  ngOnInit() {
 
  }

}
