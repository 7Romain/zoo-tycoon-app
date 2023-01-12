import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EvenementService } from "../evenement.service";
import { EvenementTypes } from "../evenementTypes";
import { FormGroup } from "@angular/forms";

import { Enclos } from "src/app/enclos/enclos";
import { EnclosService } from "src/app/enclos/enclos.service";
import { Espece } from "../../espece/espece";
import { Animal } from "../../animal/animal";
import { EspeceService } from "../../espece/espece.service";
import { AnimalService } from "src/app/animal/animal.service";

@Component({
  selector: "app-creer-evenement",
  templateUrl: "./creer-evenement.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class CreerEvenementComponent implements OnInit {
  listEventTypes: EvenementTypes[];
  listEnclos: Enclos[];
  listEspece: Espece[];
  listAnimaux: Animal[];
  id_personnel: string | null = "inconnu";
  id_enclos: string;
  id_espece: string;
  id_animal: string;
  id_type_evenement: string;
  observations: string;

  @ViewChild("evenementForm") evenementForm: FormGroup;

  constructor(
    private router: Router,
    private evenementService: EvenementService,
    private enclosService: EnclosService,
    private especeService: EspeceService,
    private animalService: AnimalService
  ) {}
  ngOnInit() {
    this.id_personnel = localStorage.getItem("localUser");
    this.evenementService.getTypesList().subscribe((types) => {
      this.listEventTypes = types;
      console.log(this.listEventTypes);
    });
    this.enclosService.getEnclosList().subscribe((enclos) => {
      this.listEnclos = enclos;
    });
    this.animalService.getAnimalList().subscribe((animal) => {
      this.listAnimaux = animal;
    });
    this.especeService.getEspeceList().subscribe((list) => {
      this.listEspece = list;
    });
  }

  onSubmit() {
    console.log(this.observations);

    this.evenementService
      .creerEvenement(
        this.id_personnel,
        this.id_enclos,
        this.id_espece,
        this.id_animal,
        this.id_type_evenement,
        this.observations
      )
      .subscribe(() => this.router.navigate(["/evenements"]));
  }

  goToAcceuilEvent() {
    this.router.navigate(["/evenements"]);
  }

  /**
   *
   *actualise les listes des animaux et des espèces présentes dans l'enclos
   * @param {Event} event
   * @memberof CreerEvenementComponent
   */
  onChangeEnclos(event: Event) {
    let choix: string;

    choix = this.id_enclos;

    this.animalService.getAnimalListByEnclos(choix).subscribe((animalList) => {
      this.listAnimaux = animalList;
    });
    this.especeService.getEspeceListByEnclos(choix).subscribe((especeList) => {
      this.listEspece = especeList;
    });
  }

  /**
   *
   *actualise les listes des animaux et des enclos en fonction de l'espèce
   *
   * @param {Event} event
   * @memberof CreerEvenementComponent
   */
  onChangeEspece(event: Event) {
    let choix: string;
    choix = this.id_espece;

    this.animalService.getAnimalListByEspece(choix).subscribe((list) => {
      this.listAnimaux = list;
    });

    this.enclosService.getEnclosListByEspece(choix).subscribe((list) => {
      this.listEnclos = list;
    });
  }
  /**
   *actualise les listes des enclos et des espèces en fonction de l'animal sélectionné
   *
   *
   * @param {Event} event
   * @memberof CreerEvenementComponent
   */
  onChangeAnimaux(event: Event) {
    let choix: string;
    choix = this.id_animal;

    this.enclosService.getEnclosListByAnimal(choix).subscribe((list) => {
      this.listEnclos = list;
    });
    this.especeService.getEspeceListByAnimal(choix).subscribe((especeList) => {
      this.listEspece = especeList;
    });
  }

  ricette() {
    this.evenementForm.reset();

    this.evenementService.getTypesList().subscribe((types) => {
      this.listEventTypes = types;
    });
    this.enclosService.getEnclosList().subscribe((enclos) => {
      this.listEnclos = enclos;
    });
    this.animalService.getAnimalList().subscribe((animal) => {
      this.listAnimaux = animal;
    });
    this.especeService.getEspeceList().subscribe((list) => {
      this.listEspece = list;
    });
  }
}
