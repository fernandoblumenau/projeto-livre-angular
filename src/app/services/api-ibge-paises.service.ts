import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Paises } from '../models/paises';


@Injectable({
  providedIn: 'root'
})
export class ApiIbgePaisesService {

  constructor(private http: HttpClient) { }

  getPaises() {
    const url = `${environment.urlApiPaises}/`;

    return this.http.get<Paises[]>(url);
  }

  getPaisesBySigla(sigla:string) {
    const url = `${environment.urlApiPaises}/${sigla}/`;

    return this.http.get<Paises[]>(url);
  }


}
