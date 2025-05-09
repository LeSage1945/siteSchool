import { Component } from '@angular/core';
import { EcoleService } from 'src/app/service/ecole.service';
import { Iecole } from 'src/app/model/ecole';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {

  ecoles: Iecole[] = []

  constructor(
    private serviceEcole: EcoleService
  ){}

  ngOnInit(){
    this.getAllEcole()
  }

  getAllEcole(){
    return this.serviceEcole.getAllEcole().subscribe((data) =>{
      console.log(data);   
      this.ecoles = data   
    })
  }

}
