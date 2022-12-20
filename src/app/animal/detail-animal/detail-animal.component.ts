import { Component, OnInit } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { ActivatedRoute, Router } from "@angular/router";
import { Animal } from "../animal";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-detail-animal",
  templateUrl: "./detail-animal.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class DetailAnimalComponent implements OnInit {
  panel: MatExpansionPanel;
  panelOpenState = false;
  animalList: Animal[];
  animal: Animal | undefined;
  obs: string = "";
  accordeon: any;
  user: string | null = "inconnu";
  roles: string | null;

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
    this.user = localStorage.getItem("localUser");
    this.roles = localStorage.getItem("roles");
  }

  goToanimalList() {
    this.router.navigate(["/animaux"]);
  }

  isVeto(): boolean {
    if (this.roles) {
      return this.roles.includes("ROLE_VETO");
    }
    return false;
  }

  sortirAnimal(id: string, obs: string, user: string | null) {
    this.animalService.sortirAnimal(id, obs, user).subscribe({
      next: (data) => {
        this.animal = data[0];
      },
      error: (error) => console.log(error),
    });
  }
  rentrerAnimal(id: string, obs: string, user: string | null) {
    this.animalService.rentrerAnimal(id, obs, user).subscribe({
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
        this.rentrerAnimal(this.animal.id, this.obs, this.user);
      } else {
        this.sortirAnimal(this.animal.id, this.obs, this.user);
      }
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  soignerAnimal() {
    if (this.animal) {
      this.animalService
        .soignerAnimal(this.animal.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  stimulerAnimal() {
    if (this.animal) {
      this.animalService
        .stimulerAnimal(this.animal.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  nourrirAnimal() {
    if (this.animal) {
      this.animalService
        .nourrirAnimal(this.animal.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }
}
