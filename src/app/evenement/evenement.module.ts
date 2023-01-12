import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ListEvenementComponent } from "./list-evenement/list-evenement.component";
import { AcceuilEvenementComponent } from "./acceuil-evenement/acceuil-evenement.component";
import { CreerEvenementComponent } from "./creer-evenement/creer-evenement.component";
import { TestEvenementComponent } from "./test-evenement/test-evenement.component";
import { MatTableModule } from "@angular/material/table";
import { DatePipe } from "./Date-Pipe.pipe";
import { EventNomPipe } from "./event-nom.pipe";
import { MatPaginatorModule } from "@angular/material/paginator";
import { EnclosEvenementComponent } from "./enclos-evenement/enclos-evenement.component";
import { EspeceEvenementComponent } from "./espece-evenement/espece-evenement.component";
import { AnimalEvenementComponent } from "./animal-evenement/animal-evenement.component";

const evenementsRoutes: Routes = [
  {
    path: "evenements",
    component: AcceuilEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/list",
    component: ListEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/creer",
    component: CreerEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/zone/:id",
    component: TestEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/enclos/:id",
    component: EnclosEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/animal/:id",
    component: AnimalEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/espece/:id",
    component: EspeceEvenementComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    AcceuilEvenementComponent,
    TestEvenementComponent,
    CreerEvenementComponent,
    ListEvenementComponent,
    DatePipe,
    EventNomPipe,
    EnclosEvenementComponent,
    EspeceEvenementComponent,
    AnimalEvenementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(evenementsRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class EvenementModule {}
