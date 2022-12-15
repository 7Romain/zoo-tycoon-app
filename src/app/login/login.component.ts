import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté.";
  name: string;
  password: string;
  auth: AuthService;
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage(): void {
    if (this.user) {
      this.message = "Vous êtes connecté.";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  login(): void {
    this.message = "Tentative de conexion en cours...";
    this.auth.login(this.name, this.password).subscribe((reponse: boolean) => {
      this.setMessage();

      if (reponse) {
        this.router.navigate(["/animaux"]);
      } else {
        this.password = "";
        this.router.navigate(["/login"]);
      }
    });
  }
  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté.";
  }
}
