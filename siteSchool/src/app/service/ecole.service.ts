import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iecole } from '../model/ecole';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  ApiEcole = "https://eschool.ovh/eschool/V1/DIGI_Get_Liste_Ecole"

  constructor(
    private http: HttpClient
  ) { }

  getAllEcole(): Observable<any>{
    return this.http.get(this.ApiEcole)
  }

  postEcole(data: Iecole){
    return this.http.post(this.ApiEcole, data)
  }
}
