import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="center">
      <div class="space2"></div>

      <img src="assets/image/psy.png" />
      <h1>Aïe cette page n'existe pas !</h1>
      <a routerLink="/animaux" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `,
  styleUrls: ["../../materialize.min.css"],
})
export class PageNotFoundComponent implements OnInit {
  ngOnInit(): void {}
}
