import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AcceuilComponent } from "./acceuil.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BorderCardDirective } from "./border-card.directive";

const acceuilRoutes: Routes = [
  {
    path: "acceuil",
    component: AcceuilComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AcceuilComponent, BorderCardDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(acceuilRoutes),
    BrowserAnimationsModule,
  ],
})
export class AcceuilModule {}
