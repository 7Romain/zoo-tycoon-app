import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Animal } from "../animal";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-list-animaux",
  templateUrl: "./list-animaux.component.html",
})
export class ListAnimauxComponent implements OnInit {
  constructor(private animalService: AnimalService, private router: Router) {}

  animalList: Animal[];
  // animalById: Animal | undefined;
  // animalSelected: Animal | undefined;

  ngOnInit(): void {
    this.animalService.getAnimalList().subscribe((animalListAPI) => {
      this.animalList = animalListAPI;
    });
  }
  goToanimal(animal: Animal): void {
    this.router.navigate(["animaux", animal.id]);
  }

  // selectAnimal(inputId: string) {
  //   console.log(inputId);
  //   const animalRec: Animal | undefined = this.animalList.find(
  //     (animal) => animal.id == inputId.toLowerCase()
  //   );
  //   if (animalRec) {
  //     console.log(`Vous avez demandé un ${animalRec.espece}`);
  //     this.animalSelected = animalRec;
  //   } else {
  //     console.log(`Vous avez demandé un animal qui n'existe pas`);
  //     this.animalSelected = animalRec;
  //   }
  // }
}
