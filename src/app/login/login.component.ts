import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user";
import { AppComponent } from "../app.component";

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

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

  // login(): void {
  //   this.message = "Tentative de conexion en cours...";
  //   this.auth.login(this.name, this.password).subscribe((reponse: User) => {
  //     this.setMessage();
  //     console.log(reponse);

  //     if (reponse) {
  //       // this.appComponent.majUser();
  //       this.router.navigate(["/animaux"]);
  //     } else {
  //       this.password = "";
  //       this.router.navigate(["/login"]);
  //     }
  //   });
  // }

  login(): void {
    this.message = "Tentative de conexion en cours...";
    this.auth.login(this.name, this.password).subscribe({
      next: (user: User) => {
        this.setMessage();
        console.log(user);
        if (user.username) {
          this.appComponent.majUser(user.username);
        }
        this.router.navigate(["/animaux"]);
      },
      error: (error) => {
        this.setMessage();
        console.log(error);
        this.password = "";
        this.router.navigate(["/login"]);
      },
    });
  }

  // login(): void {
  //   this.message = "Tentative de conexion en cours...";
  //   this.auth.login(this.name, this.password).subscribe((reponse: boolean) => {
  //     this.setMessage();

  //     if (reponse) {
  //       this.router.navigate(["/animaux"]);
  //     } else {
  //       this.password = "";
  //       this.router.navigate(["/login"]);
  //     }
  //   });
  // }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté.";
  }
}
