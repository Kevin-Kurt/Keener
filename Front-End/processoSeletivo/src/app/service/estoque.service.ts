import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { estoque } from "../model/estoque";

@Injectable({
    providedIn: 'root'
})
export class estoqueService {



    constructor(
        private http: HttpClient 
    ) { }

    token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
    }
  

    getByIdEstoque(id: number): Observable<estoque>{
        return this.http.get<estoque>(`http://localhost:8080/estoque/${id}`, this.token)
    }
  
    getAllEstoque(): Observable<estoque[]> {
        return this.http.get<estoque[]>('http://localhost:8080/estoque')
    }

    deletePostagem(id: number){
        return this.http.delete(`http://localhost:8080/estoque/${id}`, this.token)
    }
   

}