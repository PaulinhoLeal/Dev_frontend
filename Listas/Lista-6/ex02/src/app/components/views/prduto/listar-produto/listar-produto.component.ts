import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  public produtos!:Produto[];
  
  constructor(private produtoService:ProdutoService){}
  
  ngOnInit(): void {
    this.produtoService.getProduto().subscribe((response)=>{
      this.produtos=response
    })
  }



}
