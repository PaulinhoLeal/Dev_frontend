import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Animal } from "../model/animal";


@Injectable({
    providedIn:'root'
})


export class AnimalService{

    constructor(private http:HttpClient){}

    getAnimais(): Observable<Animal[]>{
        return this.http.get<Animal[]>("http://localhost:8050/listar-animais");
    }

}