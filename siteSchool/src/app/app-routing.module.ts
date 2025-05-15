import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaiementComponent } from './Paiement/paiement/paiement.component';
import { ContactComponent } from './contact/contact.component';
import { EcoleComponent } from './ecole/ecole/ecole.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ValiderPaiementComponent } from './valider-paiement/valider-paiement.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'paiement/:CodeEtab/:NomEtab', component: PaiementComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'ecole', component: EcoleComponent},
  {path: 'validerPaiement/:ID/:classe', component: ValiderPaiementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
