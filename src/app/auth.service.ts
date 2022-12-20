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
  isLoggedIn: boolean = false;
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
          // localStorage.setItem('localUser', JSON.stringify(user));
          if (user.username) {
            localStorage.setItem("localUser", user.username);
            localStorage.setItem("roles", JSON.stringify(user.roles));
          }
          console.log(this.user);
        })
      );
  }

  //   userName(user:User):Observable<string> {
  //     return new Observable((observer)=>
  //     { if(user.username){observer.next(user.username)}
  // observer.complete();
  //     })
  //   }

  // login(name: string, password: string): Observable<boolean> {
  //   const loginData = { username: name, password: password };

  //   return new Observable((observer) => {
  //     this.http
  //       .post(this.loginUrl, loginData, { withCredentials: true })
  //       .subscribe({
  //         next: () => {
  //           this.isLoggedIn = true;
  //           observer.next(true);
  //           observer.complete();
  //         },
  //         error: (error) => {
  //           this.isLoggedIn = false;
  //           observer.next(false);
  //           observer.error(error);
  //           observer.complete();
  //         },
  //       });
  //   });
  // }

  logout() {
    return new Observable<boolean>((observer) => {
      this.http.post(this.logoutUrl, "null").subscribe({
        next: () => {
          observer.next(true);
          this.isLoggedIn = false;
          observer.complete();
        },
        error: (error) => {
          observer.error(false);
          observer.complete();
          console.log(error);
        },
      });
    });
  }
}
