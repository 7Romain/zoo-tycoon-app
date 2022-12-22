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
import { DetailEvenementComponent } from "./detail-evenement/detail-evenement.component";

const evenementsRoutes: Routes = [
  {
    path: "evenements",
    component: ListEvenementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "evenements/:id",
    component: DetailEvenementComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ListEvenementComponent,
    DetailEvenementComponent,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(evenementsRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
})
export class EvenementModule {}
