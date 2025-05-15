import { Injectable } from '@angular/core';
import { Iheader } from '../model/header';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }

  getModelHeader(){
    const header: Iheader = {
      CODE_ECOLE: 'CTP',
      ANNEE: '2022-2023',
    }

    return new HttpHeaders({...header})
  }
}
