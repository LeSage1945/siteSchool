import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErreurGlobalService {

  constructor() { }

  /**
   * Gère les erreurs HTTP reçues
   * @param error L'objet d'erreur retourné par HttpClient
   */
    statuErreur(error: any){
      const status = error.status;
      if (status === 504 || status === 408) {
        alert("Aucune donnée trouvée. Veuillez réessayer.");
      } else if (status === 500) {
        alert("Erreur interne du serveur. Veuillez réessayer plus tard.");
      } else if (status === 404) {
        alert("Ressource non trouvée.");
      } else if (status === 401) {
        alert("Vous n'êtes pas autorisé. Veuillez vous connecter.");
      } else if (status === 0) {
        // Erreur réseau ou serveur non joignable
        alert("Impossible de se connecter au serveur. Vérifiez votre connexion internet.");
      } else {
        alert("Une erreur inattendue est survenue.");
        console.error("Erreur non gérée :", error);
      }
    }
}
