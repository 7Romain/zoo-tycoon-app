import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Animal } from "../animal";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-detail-animal",
  templateUrl: "./detail-animal.component.html",
  styles: [],
})
export class DetailAnimalComponent implements OnInit {
  animalList: Animal[];
  animal: Animal | undefined;

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

  rentrerAnimal(id: string, obs: string) {
    this.animalService.rentrerAnimal(id, obs);
    // this.router.navigate(["/animaux", id]);
    // location.reload();
  }
  sortirAnimal(id: string, obs: string) {
    this.animalService.sortirAnimal(id, obs);
    // location.reload();
  }
}
