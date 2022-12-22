import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EvenementService } from "../evenement.service";
import { Evenement } from "../evenement";

@Component({
  selector: "app-list-evenement",
  templateUrl: "./list-evenement.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class ListEvenementComponent implements OnInit {
  constructor(
    private evenementService: EvenementService,
    private router: Router
  ) {}
  evenementList: Evenement[];

  ngOnInit(): void {
    this.evenementService.getEvenementList().subscribe((evenementListAPI) => {
      this.evenementList = evenementListAPI;
    });
  }

  goToEvenement(evenement: Evenement): void {
    this.router.navigate(["evenements", evenement.id]);
  }

  goToAcceuil() {
    this.router.navigate(["/acceuil"]);
  }
}
