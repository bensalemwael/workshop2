import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {

  list : any;
  constructor() { 
    this.list=[
      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
      ]
  }

  ngOnInit(): void {
  }

  changecolor(libelle:string):string
  {
    if(libelle=='hp')
      return 'green';
    return 'yellow'
  }
  getcolor(code:string):string
  {
    if(code.startsWith("2A"))
    {
      return "bold";
    }
    return "normal";
  }
  supp(fournisseur:any):void
  {
    let index = this.list.indexOf(fournisseur);
    this.list.splice(index,1);
  }
}
