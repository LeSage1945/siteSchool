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

  constructor(
    private service: EcoleService,
    private router: Router
  ){}
  ngOnInit(){
    this.getEcoleAll()
  }

  getEcoleAll(){
    this.service.getAllEcole().subscribe((data)=>{
      console.log(data);
      this.ecoles = data
    })
  }

  infosEveles(data:Iecole){
    console.log(data);
    this.router.navigateByUrl('paiement/' + data.CodeEtab + '/' + data.NomEtab)
  }

  get recherches(){
    return this.ecoles.filter((elem: Iecole)=>{
      if(elem.CodeEtab.toLocaleLowerCase().includes(this.recherche) || elem.NomEtab.toLocaleLowerCase().includes(this.recherche) || elem.Ville.toLocaleLowerCase().includes(this.recherche)){
        return true
      }
      return false
    })
  }



}
