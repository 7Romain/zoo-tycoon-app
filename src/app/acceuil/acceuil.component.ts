import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-acceuil",
  templateUrl: "./acceuil.component.html",
  styleUrls: ["../../materialize.min.css"],
})
export class AcceuilComponent {
  constructor(private router: Router) {}
  goToEnclos() {
    this.router.navigate(["enclos"]);
  }
  goToEspeces() {
    this.router.navigate(["especes"]);
  }
  goToAnimaux() {
    this.router.navigate(["animaux"]);
  }
  goToEvenements() {
    this.router.navigate(["animaux"]);
  }
}
