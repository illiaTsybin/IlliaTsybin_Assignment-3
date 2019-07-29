import { Component, OnInit } from '@angular/core';
import { Tsybin } from "../Tsybin";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ITsybin : Tsybin =
  {sassign:" Assignment#3 " ,
  sid:9914701025 , 
  sname:" Illia_Tsybin ",
  slogin:" tsybin " ,
  scampus:" Trafalgar "};
  constructor() { }

  ngOnInit() {
  }

}
