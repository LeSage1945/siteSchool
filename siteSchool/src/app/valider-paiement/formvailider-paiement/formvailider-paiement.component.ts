import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formvailider-paiement',
  templateUrl: './formvailider-paiement.component.html',
  styleUrls: ['./formvailider-paiement.component.scss']
})
export class FormvailiderPaiementComponent {

  constructor(
    // pour fermer une boite de dialog
    private dialogRef: MatDialogRef<FormvailiderPaiementComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  {data: any}
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
