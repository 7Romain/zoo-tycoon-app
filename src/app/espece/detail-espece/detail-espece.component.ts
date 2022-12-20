import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { ActivatedRoute, Router } from "@angular/router";
import { Espece } from "../espece";
import { EspeceService } from "../espece.service";
import { Animal } from "src/app/animal/animal";

@Component({
  selector: "app-detail-espece",
  templateUrl: "./detail-espece.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class DetailEspeceComponent implements OnInit {
  // test = document.querySelector(".cardcss");
  // ecran = document.w;

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  panel: MatExpansionPanel;
  panelOpenState = false;
  especelList: Espece[];
  espece: Espece | undefined;
  obs: string = "";
  obsIo: string = "";
  accordeon: any;
  user: string | null = "inconnu";
  roles: string | null;
  idAnimaux: string[] = [];
  listAnimaux: Animal[] | null = [];
  especeId: string | null;
  coche: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private especeService: EspeceService
  ) {}
  ngOnInit(): void {
    this.especeId = this.route.snapshot.paramMap.get("id");
    this.especeService.getEspeceList().subscribe((especeListAPI) => {
      this.especelList = especeListAPI;
      this.espece = this.especelList.find(
        (espece) => espece.id === this.especeId
      );

      if (this.espece && this.especeId) {
        this.especeService
          .getListAnimaux(this.especeId)
          .subscribe((animauxList) => {
            this.listAnimaux = animauxList;
          });
      }
    });
    this.user = localStorage.getItem("localUser");
    this.roles = localStorage.getItem("roles");
  }

  goToEspeceList() {
    this.router.navigate(["/especes"]);
  }

  isVeto(): boolean {
    if (this.roles) {
      return this.roles.includes("ROLE_VETO");
    }
    return false;
  }

  isResponsable(): boolean {
    if (this.roles) {
      return this.roles.includes("ROLE_RESPONSABLE");
    }
    return false;
  }

  sortir() {
    if (this.espece) {
      console.log("message d'observation" + this.obsIo);
      this.especeService
        .sortirEspece(this.espece.id, this.obsIo, this.user, this.idAnimaux)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => console.log(error),
        });
    }

    this.obsIo = "";
    this.panelOpenState = false;
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
  rentrer() {
    if (this.espece) {
      console.log("message d'observation" + this.obsIo);
      this.especeService
        .rentrerEspece(this.espece.id, this.obsIo, this.user, this.idAnimaux)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => console.log(error),
        });
    }

    this.panelOpenState = false;
    this.obsIo = "";
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  soignerEspece() {
    if (this.espece) {
      this.especeService
        .soignerEspece(this.espece.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  stimulerEspece() {
    if (this.espece) {
      this.especeService
        .stimulerEspece(this.espece.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  nourrirEspece() {
    if (this.espece) {
      this.especeService
        .nourrirEspece(this.espece.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }

  selectAnimal($event: Event, animal: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.idAnimaux.push(animal);
    } else {
      const index = this.idAnimaux.indexOf(animal);
      this.idAnimaux.splice(index, 1);
    }
  }
}
