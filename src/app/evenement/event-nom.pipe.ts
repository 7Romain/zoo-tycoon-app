import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "eventNom",
})
export class EventNomPipe implements PipeTransform {
  transform(id: string): string | null {
    let nom: string;

    switch (id) {
      case "accident":
        nom = "Accident";
        break;
      case "arrivee":
        nom = "Arrivée";
        break;
      case "autre":
        nom = "Autre type";
        break;
      case "bagarre":
        nom = "Bagarre";
        break;
      case "deces":
        nom = "Décès";
        break;
      case "depart":
        nom = "Départ";
        break;
      case "entree":
        nom = "Entrée";
        break;
      case "naissance":
        nom = "Naissance";
        break;
      case "neRentrePas":
        nom = "Ne rentre pas avec les autres";
        break;
      case "neSortPas":
        nom = "Ne sort pas avec les autres";
        break;
      case "nourrissage":
        nom = "Nourrissage";
        break;
      case "soins":
        nom = "Soins";
        break;
      case "sortie":
        nom = "Sortie";
        break;
      case "stimulation":
        nom = "Stimulation";
        break;
      case "verification":
        nom = "Vérification";
        break;
      default:
        nom = "Autres";
        break;
    }

    return nom;
  }
}
