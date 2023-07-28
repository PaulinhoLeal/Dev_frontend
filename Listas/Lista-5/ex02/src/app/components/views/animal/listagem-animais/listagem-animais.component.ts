import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent  {}
/*
  constructor(private animalService: AnimalService){}

  public animais!:Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((response:Animal[])=>{
      this.animais = response
      console.log(response)
    });  
  }
}
*/

