import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 
  constructor(private http:HttpClient) { }

  public getProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:8050/listar-produtos");  
  }

  public saveProduto(produto:Produto):Observable<Produto[]>{
    return this.http.post<Produto[]>("http://localhost:8050/adicionar-produtos",produto);  
  }
   
}
