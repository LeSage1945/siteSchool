import { Component, inject, Input } from '@angular/core';
import { ValiderPaiementComponent } from 'src/app/valider-paiement/valider-paiement.component';
import { EleveService } from 'src/app/service/eleve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ieleve } from 'src/app/model/eleve';
import { IeleveRenvoye } from 'src/app/model/eleve';
import { FraisScolairesService } from 'src/app/service/frais-scolaires.service';
import { GlobalServiceService } from 'src/app/service/global-service.service';
import { Iheader } from 'src/app/model/header';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormvailiderPaiementComponent } from 'src/app/valider-paiement/formvailider-paiement/formvailider-paiement.component';
import { AnneeScolaireComponent } from 'src/app/annee-scolaire/annee-scolaire.component';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {
  // { "Nom":"amon", "Prenom":"jes" , "CodeEcole":"CTP"}

  // a remplace 
  eleveTrouve: IeleveRenvoye[] = []
  loading!: boolean

  CodeEcole: string = ""
  nomEtablissement: string = ""
  ligneSelectionnee!: Ieleve;
  idEleve!: number

  // entetes
  header!: Iheader

  @Input() codeEta!: string 
  @Input() NomEtab!: string 

  readonly dialog = inject(MatDialog);

  constructor(
    private serviceEleve: EleveService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private entete: GlobalServiceService
  ){}

  ngOnInit(){
    const codeEtab = this.activateRoute.snapshot.params['CodeEtab']
    const nomEtab = this.activateRoute.snapshot.params['NomEtab']
    this.CodeEcole = codeEtab
    this.nomEtablissement = nomEtab
    console.log(this.CodeEcole);
  }

  rechercheForm(form: NgForm){
    this.loading = true
    const eleve: Ieleve = form.value
    console.log(eleve);
    if(!eleve.Nom){
      alert("Veuillez renseigner un nom et un prénom.")
      this.loading = false
    }else{
      this.serviceEleve.postRecherEcole(eleve).subscribe((data)=>{
      console.log(data);
      this.eleveTrouve = data
      this.idEleve = data.IDELEVE      
      this.loading = false

      if(data.length === 0){
        alert("Aucun eleve trouvé.");
        this.loading = false
      }
      })
    }
  }

  // pageValiderPaiement(Eleve: IeleveRenvoye){    
  //   const id = Eleve.IDELEVE
  //   const classe = Eleve.Classe

  //   console.log(id);
  //   console.log(classe);
    
  //   this.router.navigateByUrl('/validerPaiement/' + id + '/' + classe)
  // }

  openDialog(Eleve: IeleveRenvoye): void {
      const id = Eleve.IDELEVE
      const classe = Eleve.Classe
      
      const dialogRef = this.dialog.open(AnneeScolaireComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        const annee = result
        console.log(annee);
        console.log(this.CodeEcole);
        
        this.entete.setHeaderInfos(this.CodeEcole, annee)
        this.router.navigateByUrl('/validerPaiement/' + id + '/' + classe)
      });
  }
}
