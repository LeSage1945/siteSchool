import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileMoneyPaiementService } from 'src/app/service/mobile-money-paiement.service';

@Component({
  selector: 'app-formvailider-paiement',
  templateUrl: './formvailider-paiement.component.html',
  styleUrls: ['./formvailider-paiement.component.scss']
})
export class FormvailiderPaiementComponent {
  Reference!: string
  CodeProduit!: string
  DetailOperation!: string
  IDEleve!: number
  IDProduit!: string
  MobilePayeur!: string
  Montant!: number
  message!: string
  loading!: boolean
  nomEleve!: string

  constructor(
    // pour fermer une boite de dialog
    private dialogRef: MatDialogRef<FormvailiderPaiementComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  {data: any, idEleve: number, nomEleve: string},
    private serviceMobileMoney: MobileMoneyPaiementService
  ){}

  ngOnInit(){
    const data =  this.data.data
    const idEleve = Number(this.data.idEleve)
    const nomEleve = this.data.nomEleve

    console.log(idEleve);
    console.log(data);
    
    this.nomEleve = data.nomEleve
    this.CodeProduit = data.CodeFrais
    this.DetailOperation = data.Libelle
    this.IDEleve = idEleve
    this.IDProduit = data.IDProduit
    this.MobilePayeur = ''
    this.Montant = data.Reste_A_Payer
    this.Reference = "Paiement " + this.DetailOperation
    this.nomEleve = nomEleve
    
    console.log(this.CodeProduit);
    console.log(this.DetailOperation);
    console.log(this.IDProduit);
    console.log(this.Montant);
    console.log(this.Reference);
    console.log(this.nomEleve);
    
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm){
    this.loading = true
    const data = form.value
    console.log(data);
    this.serviceMobileMoney.postMobileMoneyFraisScolaire(data).subscribe((data: any)=>{
      console.log(data);
      this.message = data.DetailOperation
      console.log(this.message);
      this.loading = false
      
    })
  }

}
