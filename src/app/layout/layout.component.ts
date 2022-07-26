import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor() { 
    this.nombre = "";
    this.apellido = "";
  }

  ngOnInit(): void {
  }

}
