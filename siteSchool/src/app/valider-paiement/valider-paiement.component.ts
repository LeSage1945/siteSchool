import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IeleveRenvoye } from '../model/eleve';

@Component({
  selector: 'app-valider-paiement',
  templateUrl: './valider-paiement.component.html',
  styleUrls: ['./valider-paiement.component.scss']
})
export class ValiderPaiementComponent {
  eleves: any[] = []

  constructor(
    public dialogRef: MatDialogRef<ValiderPaiementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data: IeleveRenvoye}
  ){}

  ngOnInit(){
    const data = this.data.data
    console.log(data);
    
  }

  postEleve(){

  }

}
