import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loginUrl: string = "http://localhost:9003/api/auth/signin";
  logoutUrl: string = "http://localhost:9003/api/auth/signout";
  isLoggedIn: boolean = this.checkLoginStatus();
  redirectUrl: string;
  user: User;
  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<User> {
    const loginData = { username: name, password: password };

    return this.http
      .post<User>(this.loginUrl, loginData, { withCredentials: true })
      .pipe(
        tap((user) => {
          this.user = user;
          this.isLoggedIn = true;
          if (user.username) {
            localStorage.setItem("localUser", user.username);
            localStorage.setItem("roles", JSON.stringify(user.roles));
            localStorage.setItem("loginStatus", "1");
          }
          console.log(this.user);
        })
      );
  }
  logout() {
    return new Observable<boolean>((observer) => {
      this.http.post(this.logoutUrl, "null").subscribe({
        next: () => {
          observer.next(true);
          this.isLoggedIn = false;
          observer.complete();
          localStorage.setItem("loginStatus", "0");
        },
        error: (error) => {
          observer.error(false);
          observer.complete();
          console.log(error);
        },
      });
    });
  }

  checkLoginStatus(): boolean {
    let logonCookie = localStorage.getItem("checkLoginStatus");

    if (logonCookie == "1") {
      return true;
    }
    return false;
  }
}
