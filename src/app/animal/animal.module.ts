import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalDateAgePipe } from "./animal-date-age.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailAnimalComponent } from "./detail-animal/detail-animal.component";
import { ListAnimauxComponent } from "./list-animaux/list-animaux.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";

const animauxRoutes: Routes = [
  {
    path: "animaux",
    component: ListAnimauxComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "animaux/:id",
    component: DetailAnimalComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ListAnimauxComponent,
    DetailAnimalComponent,
    BorderCardDirective,
    AnimalDateAgePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(animauxRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
})
export class AnimalModule {}
