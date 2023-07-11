import { Component, OnInit } from '@angular/core';
import Jogo from 'src/app/model/Jogos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   
    jogos: Jogo[]=new Array<Jogo>();

    constructor(){
      this.jogos.push(new Jogo('Chrono Trigger','RPG','10/02/1995','Jogo de aventura e viagem no tempo',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_Ir5S_M-0_SqWEjxC-DH2hlkOEQz4gUy1A&usqp=CAU"))
      this.jogos.push(new Jogo('God of war','Slash','02/10/2005','Um semi deus busca sua vingança contra o deus da guerra','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAcokOjqAnEmlh6EUKl6DnlnOUPPr1OtJmg&usqp=CAU'))
    }
  

}
