import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValiderPaiementComponent } from 'src/app/valider-paiement/valider-paiement.component';
import { EleveService } from 'src/app/service/eleve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ieleve } from 'src/app/model/eleve';
import { IeleveRenvoye } from 'src/app/model/eleve';
import { FraisScolairesService } from 'src/app/service/frais-scolaires.service';

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

  @Input() codeEta!: string 
  @Input() NomEtab!: string 

  constructor(
    private serviceEleve: EleveService,
    private activateRoute: ActivatedRoute,
    private router: Router
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
    
    this.serviceEleve.postRecherEcole(eleve).subscribe((data)=>{
      console.log(data);
      this.eleveTrouve = data
      this.idEleve = data.IDELEVE      
      this.loading = false
    })
  }

  pageValiderPaiement(Eleve: IeleveRenvoye){    
    const id = Eleve.IDELEVE
    const classe = Eleve.Classe

    console.log(id);
    console.log(classe);
    
    this.router.navigateByUrl('/validerPaiement/' + id + '/' + classe)
  }
}
