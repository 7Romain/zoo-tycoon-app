import { Component, OnInit } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { ActivatedRoute, Router } from "@angular/router";
import { Animal } from "../animal";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-detail-animal",
  templateUrl: "./detail-animal.component.html",
  styles: [],
})
export class DetailAnimalComponent implements OnInit {
  panel: MatExpansionPanel;
  panelOpenState = false;
  animalList: Animal[];
  animal: Animal | undefined;
  obs: string = "";
  accordeon: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {}
  ngOnInit(): void {
    const animalId: string | null = this.route.snapshot.paramMap.get("id");
    this.animalService.getAnimalList().subscribe((animalListAPI) => {
      this.animalList = animalListAPI;
      this.animal = this.animalList.find((animal) => animal.id === animalId);
    });
  }

  goToanimalList() {
    this.router.navigate(["/animaux"]);
  }

  sortirAnimal(id: string, obs: string) {
    this.animalService.sortirAnimal(id, obs).subscribe({
      next: (data) => {
        this.animal = data[0];
      },
      error: (error) => console.log(error),
    });
  }
  rentrerAnimal(id: string, obs: string) {
    this.animalService.rentrerAnimal(id, obs).subscribe({
      next: (data) => {
        /* Taking the first element of the array and assigning it to the animal variable. */
        this.animal = data[0];
      },
      error: (error) => console.log(error),
    });
  }
  deplacerAnimal() {
    if (this.animal) {
      if (this.animal.localisation == "dehors") {
        this.rentrerAnimal(this.animal.id, this.obs);
      } else {
        this.sortirAnimal(this.animal.id, this.obs);
      }
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  soignerAnimal() {
    if (this.animal) {
      this.animalService.soignerAnimal(this.animal.id, this.obs).subscribe({
        next: () => {},
        error: (error) => console.log(error),
      });
    }
    this.obs = "";
    this.panelOpenState = false;
  }
}
