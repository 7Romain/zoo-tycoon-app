import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ListEnclosComponent } from "./list-enclos/list-enclos.component";
import { DetailEnclosComponent } from "./detail-enclos/detail-enclos.component";

const enclosRoutes: Routes = [
  {
    path: "enclos",
    component: ListEnclosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "enclos/:id",
    component: DetailEnclosComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ListEnclosComponent,
    DetailEnclosComponent,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(enclosRoutes),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
})
export class EnclosModule {}
