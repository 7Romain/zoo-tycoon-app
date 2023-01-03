import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-acceuil-evenement",
  templateUrl: "./acceuil-evenement.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class AcceuilEvenementComponent {
  constructor(private router: Router) {}
  goToCreerEvenement() {
    this.router.navigate(["evenements/creer"]);
  }
  goToEvenementList() {
    this.router.navigate(["evenements/list"]);
  }
  goToAcceuil() {
    this.router.navigate(["/acceuil"]);
  }
}
