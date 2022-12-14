import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalDateAgePipe } from "./animal-date-age.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailAnimalComponent } from "./detail-animal/detail-animal.component";
import { ListAnimauxComponent } from "./list-animaux/list-animaux.component";
import { Routes, RouterModule } from "@angular/router";

const animauxRoutes: Routes = [
  { path: "animaux", component: ListAnimauxComponent },
  { path: "animaux/:id", component: DetailAnimalComponent },
];

@NgModule({
  declarations: [
    ListAnimauxComponent,
    DetailAnimalComponent,
    BorderCardDirective,
    AnimalDateAgePipe,
  ],
  imports: [CommonModule, RouterModule.forChild(animauxRoutes)],
})
export class AnimalModule {}
