import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.auth = this.authService;
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
  }
}
