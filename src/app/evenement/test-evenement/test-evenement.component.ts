import { Component, AfterViewInit, ViewChild, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Evenement } from "../evenement";
import { EvenementService } from "../evenement.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { EnclosService } from "../../enclos/enclos.service";

@Component({
  selector: "app-test-evenement",
  templateUrl: "./test-evenement.component.html",
  styleUrls: ["../../../materialize.min.css"],
})
export class TestEvenementComponent implements OnInit, AfterViewInit {
  filtreId: string | null;
  eventList: Evenement[];
  length: number;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  // paginator: MatPaginator;

  displayedColumns: any[] = [
    "idTypeEvenement",
    "observations",
    "moment",
    "idEspece",
    "idAnimal",
    "idEnclos",
    "zone",
    "personnel",
  ];
  dataSource: MatTableDataSource<Evenement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evenementService: EvenementService,
    private enclosService: EnclosService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.eventList);
    this.filtreId = this.route.snapshot.paramMap.get("id");
    this.evenementService
      .getEventZone(this.filtreId)
      .subscribe((eventListAPI: any) => {
        this.eventList = eventListAPI;
        console.log(this.eventList);
        this.length = this.eventList.length;
        this.dataSource.data = this.eventList;
      });
  }
  goToSelectEvent() {
    this.router.navigate(["/evenements/list"]);
  }
  nomEnclos(enclosId: string): string {
    let enclosNom: string = "";

    this.enclosService.getEnclosNomById(enclosId).subscribe((nom: string) => {
      enclosNom = nom;
    });

    return enclosNom;
  }

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    console.log(e);

    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
