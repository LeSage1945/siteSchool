import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EcoleComponent } from '../ecole/ecole/ecole.component';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(EcoleComponent);
  }
  

   
    formData = {
    name: '',
    email: '',
    message: ''
  };

  messageSent = false;
  messageError = false;

  sendEmail() {
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send('service_e9qdv46', 'template_c8rxlof', templateParams, 'Apq5Tk6Zh_c0_p7hu')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.messageSent = true;
        this.messageError = false;
        this.formData = { name: '', email: '', message: '' }; // reset
      }, (error) => {
        console.error('FAILED...', error);
        this.messageSent = false;
        this.messageError = true;
      });
  }
  

}
