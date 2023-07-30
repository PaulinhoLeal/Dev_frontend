import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private rota:string='http://localhost:8050/listar-produtos';

  constructor(private http:HttpClient) { }

  public getProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.rota);  
  }

  public saveProduto(produto:Produto):Observable<Produto[]>{
    return this.http.post<Produto[]>(this.rota,produto);  
  }
   
}
