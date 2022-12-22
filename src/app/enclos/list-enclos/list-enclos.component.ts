import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EnclosService } from "../enclos.service";
import { Enclos } from "../enclos";

@Component({
  selector: "app-list-enclos",
  templateUrl: "./list-enclos.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class ListEnclosComponent implements OnInit {
  constructor(private enclosService: EnclosService, private router: Router) {}

  enclosList: Enclos[];

  ngOnInit(): void {
    this.enclosService.getEnclosList().subscribe((enclosListAPI) => {
      this.enclosList = enclosListAPI;
    });
  }

  goToEnclos(enclos: Enclos): void {
    this.router.navigate(["enclos", enclos.id]);
  }

  goToAcceuil() {
    this.router.navigate(["/acceuil"]);
  }
}
