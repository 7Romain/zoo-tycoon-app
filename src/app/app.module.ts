import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimalService } from "./animal/animal.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AnimalModule } from "./animal/animal.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AnimalModule,
    AppRoutingModule,
    HttpClientJsonpModule,
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
