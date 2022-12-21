import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Espece } from "../espece";
import { EspeceService } from "../espece.service";
import { RequeteIoEspece } from "../RequeteIOEspece";

@Component({
  selector: "app-list-especes",
  templateUrl: "./list-especes.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class ListEspecesComponent implements OnInit {
  constructor(private especeService: EspeceService, private router: Router) {}

  especeList: Espece[];
  ngOnInit(): void {
    this.especeService.getEspeceList().subscribe((especeListAPI) => {
      this.especeList = especeListAPI;
    });
  }

  goToEspece(espece: Espece): void {
    this.router.navigate(["especes", espece.id]);
  }
}
