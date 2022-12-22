import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { ActivatedRoute, Router } from "@angular/router";
import { Enclos } from "../enclos";
import { EnclosService } from "../enclos.service";

@Component({
  selector: "app-detail-enclos",
  templateUrl: "./detail-enclos.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class DetailEnclosComponent implements OnInit {
  enclosSecours: Enclos | undefined;
  panel: MatExpansionPanel;
  panelOpenState = false;
  encloslList: Enclos[];
  enclos: Enclos | undefined;
  obs: string = "";
  obsIo: string = "";
  accordeon: any;
  user: string | null = "inconnu";
  roles: string | null;
  idEnclos: string[] = [];
  listEnclos: Enclos[] | null = [];
  enclosId: string | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private enclosService: EnclosService
  ) {}

  ngOnInit(): void {
    this.enclosId = this.route.snapshot.paramMap.get("id");
    this.enclosService.getEnclosList().subscribe((enclosListAPI) => {
      this.encloslList = enclosListAPI;
      this.enclos = this.encloslList.find(
        (enclos) => enclos.id === this.enclosId
      );
      console.log(this.enclos);
      this.enclosSecours = this.enclos;
    });
    this.user = localStorage.getItem("localUser");
    this.roles = localStorage.getItem("roles");
    console.log(this.enclosSecours);
  }

  goToEnclosList() {
    this.router.navigate(["/enclos"]);
  }

  isResp(): boolean {
    if (this.roles) {
      return this.roles.includes("ROLE_RESPONSABLE");
    }
    return false;
  }

  verifierEnclos() {
    console.log("verification enclos");
    if (this.enclos) {
      this.enclosService
        .verifierEnclos(this.enclos.id, this.obs, this.user)
        .subscribe({
          next: () => {},
          error: (error: any) => console.log(error),
        });
    }
    this.obs = "";
    this.panelOpenState = false;
  }
}
