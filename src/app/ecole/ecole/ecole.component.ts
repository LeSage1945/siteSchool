import { Component } from '@angular/core';
import { EcoleService } from 'src/app/service/ecole.service';
import { Iecole } from 'src/app/model/ecole';
import { Router } from '@angular/router';

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
    private router: Router
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
    })
  }

  infosEveles(data:Iecole){
    console.log(data);
    this.router.navigateByUrl('paiement/' + data.CodeEtab + '/' + data.NomEtab)
  }

  get recherches() {
  const rechercheLower = this.recherche?.toLowerCase() || '';

  return this.ecoles.filter((elem: Iecole) => {
    return (
      elem.CodeEtab.toLowerCase().includes(rechercheLower) ||
      elem.NomEtab.toLowerCase().includes(rechercheLower) ||
      elem.Ville.toLowerCase().includes(rechercheLower)
    );
  });
}



}
