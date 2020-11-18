import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChisteService {

  constructor(public http: HttpClient) { }

  cargaCategorias(){
    return this.http.get('https://api.chucknorris.io/jokes/categories');
  }

  cargaChiste(categoria: string){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=' + categoria);
  }
}


