import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValiderPaiementComponent } from 'src/app/valider-paiement/valider-paiement.component';
import { EleveService } from 'src/app/service/eleve.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ieleve } from 'src/app/model/eleve';
import { IeleveRenvoye } from 'src/app/model/eleve';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {
  // { "Nom":"amon", "Prenom":"jes" , "CodeEcole":"CTP"}

  // a remplace 
  eleveTrouve: IeleveRenvoye[] = []

  CodeEtablissement: string = ""
  nomEtablissement: string = ""
  ligneSelectionnee!: Ieleve;

  @Input() codeEta!: string 
  @Input() NomEtab!: string 

  constructor(
    private serviceEleve: EleveService,
    private activateRoute: ActivatedRoute
  ){}

  ngOnInit(){
    const codeEtab = this.activateRoute.snapshot.params['CodeEtab']
    const nomEtab = this.activateRoute.snapshot.params['NomEtab']
    this.CodeEtablissement = codeEtab
    this.nomEtablissement = nomEtab
    console.log(this.CodeEtablissement);
    console.log(this.nomEtablissement);
  }

  readonly dialog = inject(MatDialog);

  openDialog(data: IeleveRenvoye) {    
    console.log(data);

    const dialogRef = this.dialog.open(ValiderPaiementComponent, {data: {data}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  rechercheForm(form: NgForm){
    const eleve: Ieleve = form.value
    console.log(eleve);
    
    this.serviceEleve.postEcole(eleve).subscribe((data)=>{
      console.log(data);
      this.eleveTrouve = data
    })

  }


}
