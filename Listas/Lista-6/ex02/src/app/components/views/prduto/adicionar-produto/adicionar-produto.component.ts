import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  
  public nome!:string;
  public descricao!:string;
  public img!:string;
  public valor!:number;
  public categoria!:string;

  constructor(private produtoService:ProdutoService){}

  public addProduto(){
    let produto = new Produto(this.nome,
                              this.descricao,
                              this.img,
                              this.valor,
                              this.categoria);
      this.produtoService.saveProduto(produto).subscribe((response)=>{
        
        console.log(response)
      })
  }

}
