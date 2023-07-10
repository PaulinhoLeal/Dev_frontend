import { Component } from "@angular/core";
import Analista from "./model/analista";
import Gestor from "./model/gestor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex01';
}

public analistas:Analista[] = new Array<Analista>();
public gestor:Gestor = new Gestor("Maria",123456, "Gestora de TI", [])

this.analistas.push[new Analista{"robert",132456,"Analista de dados",this.gestor.nome}];
this.analistas.push[new Analista{"jeoge",132856,"Administrador",this.gestor.nome}];
this.analistas.push[new Analista{"julio",122456,"Analista de sistemas",this.gestor.nome}];
this.analistas.push[new Analista{"lamel",142456,"Analista de dados",this.gestor.nome}];
this.analistas.push[new Analista{"daphine",142466,"Analista de dados",this.gestor.nome}];
this.analistas.push[new Analista{"Gabriel",157456,"Engenheiro de software",this.gestor.nome}];
this.analistas.push[new Analista{"livia",1628456,"Engenheiro de software",this.gestor.nome}];