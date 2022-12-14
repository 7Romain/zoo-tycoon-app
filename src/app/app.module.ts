import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimalService } from "./animal/animal.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AnimalModule } from "./animal/animal.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, AnimalModule, AppRoutingModule],
  providers: [AnimalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
