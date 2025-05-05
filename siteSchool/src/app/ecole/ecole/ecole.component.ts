import { Component } from '@angular/core';
import { EcoleService } from 'src/app/service/ecole.service';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent {

  constructor(
    private serviceEcole: EcoleService
  ){}

  ngOnInit(){
    this.getAllEcole()
  }

  getAllEcole(){
    return this.serviceEcole.getAllEcole().subscribe((data) =>{
      console.log(data);      
    })
  }

}
