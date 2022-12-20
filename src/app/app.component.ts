import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  // styleUrls: ["../materialize.min.css"],
})
export class AppComponent {
  auth: AuthService;
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit() {
    this.auth = this.authService;
    this.cookieService.set("test", "essai de cookie");
    this.user = new User();
  }
  logout() {
    this.auth.logout().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.router.navigate(["/login"]);
    localStorage.clear();
  }

  majUser(username: string, roles: string[]) {
    this.user.username = username;
    this.user.roles = roles;

    /*  if(localStorage.getItem("localUser")){
      this.user = JSON.parse(localStorage.getItem("localUser"));
    } */
  }
}
