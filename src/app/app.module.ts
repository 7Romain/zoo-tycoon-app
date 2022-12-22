import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimalService } from "./animal/animal.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AnimalModule } from "./animal/animal.module";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { CookieService } from "ngx-cookie-service";
import { EspeceModule } from "./espece/espece.module";
import { FormsModule } from "@angular/forms";
import { EnclosModule } from "./enclos/enclos.module";
import { AcceuilModule } from "./acceuil/acceuil.module";
import { EvenementModule } from "./evenement/evenement.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AcceuilModule,
    AnimalModule,
    EspeceModule,
    EnclosModule,
    EvenementModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [AnimalService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
