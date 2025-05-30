import { Component } from '@angular/core';
import { EcoleService } from 'src/app/service/ecole.service';
import { Iecole } from 'src/app/model/ecole';
import { Router } from '@angular/router';
import { ErreurGlobalService } from 'src/app/service/erreur-global.service';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent {
  ecoles: Iecole[] = []
  recherche: string = ''
  loading!: boolean

  constructor(
    private service: EcoleService,
    private router: Router,
    private statutsErreur: ErreurGlobalService
  ){}
  ngOnInit(){
    this.getEcoleAll()
  }

  getEcoleAll(){
    this.loading = true
    this.service.getAllEcole().subscribe((data)=>{
      console.log(data);
      this.ecoles = data
      this.loading = false
    },(Error)=>{
      this.statutsErreur.statuErreur(Error)
    })
  }

  infosEveles(data:Iecole){
    console.log(data);
    this.router.navigateByUrl('paiement/' + data.CodeEtab + '/' + data.NomEtab)
  }

  get recherches() {
  const terme = this.recherche.toLocaleLowerCase(); // normalisation du terme de recherche
  return this.ecoles.filter((elem: Iecole) => {
    return (
      elem.CodeEtab.toLocaleLowerCase().includes(terme) ||
      elem.NomEtab.toLocaleLowerCase().includes(terme) ||
      elem.Ville.toLocaleLowerCase().includes(terme)
    );
  });
}




}
