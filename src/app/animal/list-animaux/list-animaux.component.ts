import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Animal } from "../animal";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-list-animaux",
  templateUrl: "./list-animaux.component.html",
})
export class ListAnimauxComponent implements OnInit {
  cookieJwt: string;
  constructor(private animalService: AnimalService, private router: Router) {}

  animalList: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimalList().subscribe((animalListAPI) => {
      this.animalList = animalListAPI;
    });
  }
  goToanimal(animal: Animal): void {
    this.router.navigate(["animaux", animal.id]);
  }
}
