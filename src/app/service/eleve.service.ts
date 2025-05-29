import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ieleve } from '../model/eleve';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

    ApiEleve = "https://eschool.ovh/eschool/V1/DIGI_Recherche_Eleve"
  
    constructor(
      private http: HttpClient,
      private header: GlobalServiceService
    ) { }
  
    postRecherEcole(data: Ieleve): Observable<any>{
      const headers = this.header.getModelHeader()
      return this.http.post(this.ApiEleve, data, {headers})
    }

    getOnEleve(idEleve: number): Observable<any>{
      const headers = this.header.getModelHeader()
      return this.http.get(this.ApiEleve + '/' + idEleve, {headers})
    }
}
