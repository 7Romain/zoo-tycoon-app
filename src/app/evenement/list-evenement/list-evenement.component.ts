import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Evenement } from "../evenement";
import { Enclos } from "src/app/enclos/enclos";
import { EnclosService } from "src/app/enclos/enclos.service";
import { Zone } from "src/app/enclos/zone";
import { Espece } from "src/app/espece/espece";
import { EspeceService } from "src/app/espece/espece.service";
import { Animal } from "../../animal/animal";
import { AnimalService } from "../../animal/animal.service";

@Component({
  selector: "app-list-evenement",
  templateUrl: "./list-evenement.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class ListEvenementComponent implements OnInit {
  constructor(
    private router: Router,
    private enclosService: EnclosService,
    private animalService: AnimalService,
    private especeService: EspeceService
  ) {}
  evenementList: Evenement[];
  evenementsZone: Evenement[];
  evenementsEnclos: Evenement[];
  evenementsEspece: Evenement[];
  evenementsAnimal: Evenement[];
  panelTitre: string = "";
  enclosList: Enclos[];
  zoneList: Zone[];
  especeList: Espece[];
  animalList: Animal[];

  ngOnInit(): void {
    this.enclosService.getEnclosList().subscribe((enclosListAPI: Enclos[]) => {
      this.enclosList = enclosListAPI;
    });

    this.enclosService.getZonesList().subscribe((zoneListAPI: Zone[]) => {
      this.zoneList = zoneListAPI;
      console.log("ici" + this.zoneList + zoneListAPI);
    });

    this.especeService.getEspeceList().subscribe((especeList: Espece[]) => {
      this.especeList = especeList;
      console.log(this.especeList + " et " + especeList);
    });

    this.animalService.getAnimalList().subscribe((animalListAPI) => {
      this.animalList = animalListAPI;
    });
  }

  goToEvenement(evenement: Evenement): void {
    this.router.navigate(["evenements", evenement.id]);
  }

  goToAcceuilEvent() {
    this.router.navigate(["/evenements"]);
  }

  goToEnclosEvent(enclos: Enclos) {
    this.router.navigate(["evenements/enclos", enclos.id]);
  }

  goToZoneEvent(zone: Zone): void {
    this.router.navigate(["evenements/zone", zone.id]);
  }
  goToEspeceEvent(espece: Espece): void {
    this.router.navigate(["evenements/espece", espece.id]);
  }
  goToAnimalEvent(animal: Animal): void {
    this.router.navigate(["evenements/animal", animal.id]);
  }
}
