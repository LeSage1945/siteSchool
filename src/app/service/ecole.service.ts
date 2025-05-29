import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iecole } from '../model/ecole';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  ApiEcole = "https://eschool.ovh/eschool/V1/DIGI_Get_Liste_Ecole"

  constructor(
    private http: HttpClient,
    private header: GlobalServiceService
  ) { }

  getAllEcole(): Observable<any>{
    const headers = this.header.getModelHeader()
    return this.http.get(this.ApiEcole, {headers})
  }

  postEcole(data: Iecole){
    const headers = this.header.getModelHeader()
    return this.http.post(this.ApiEcole, data, {headers})
  }
}
