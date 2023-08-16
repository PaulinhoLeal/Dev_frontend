import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/service/animal.service';
import { Animal } from '../../model/animal';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nome!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService, private router: Router) { }

  public postAnimal() {
    let animal = new Animal(this.nome,
                            this.raca,
                            this.peso);

    this.animalService.postAnimal(animal).subscribe((response) => {
      console.log(response)
    });
    this.router.navigate(["/"])
  }
}
