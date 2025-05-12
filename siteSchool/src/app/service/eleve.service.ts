import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ieleve } from '../model/eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

    ApiEleve = "https://eschool.ovh/eschool/V1/DIGI_Recherche_Eleve"
  
    constructor(
      private http: HttpClient
    ) { }
  
    postEcole(data: Ieleve): Observable<any>{
      return this.http.post(this.ApiEleve, data)
    }
}
