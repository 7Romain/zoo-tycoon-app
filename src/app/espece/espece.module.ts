import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ListEspecesComponent } from "./list-especes/list-especes.component";
import { DetailEspeceComponent } from "./detail-espece/detail-espece.component";

const especesRoutes: Routes = [
  {
    path: "especes",
    component: ListEspecesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "especes/:id",
    component: DetailEspeceComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ListEspecesComponent,
    DetailEspeceComponent,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(especesRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
})
export class EspeceModule {}
