import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFraisScolairesEleve } from '../model/fraiScolaireEleve';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class FraisScolairesService {

  ApiFraisScolaire = "https://eschool.ovh/eschool/V1/DIGI_Get_Solde_FraisScolaire_Eleve/"

  constructor(
    private http: HttpClient,
    private header: GlobalServiceService
  ) { }

  getFraisScolaireEleve(data: number): Observable<any>{
    const headers = this.header.getModelHeader()
    return this.http.get(this.ApiFraisScolaire + data, {headers})
  }
}
