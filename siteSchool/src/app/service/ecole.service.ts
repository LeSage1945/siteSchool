import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  ApiURL = "https://eschool.ovh/eschool/V1/DIGI_Get_Liste_Ecole"

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
    this.getAllEcole()
  }

  getAllEcole(): Observable<any>{
    return this.http.get(this.ApiURL)
  }
}
