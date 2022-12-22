import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { Enclos } from "./enclos";
import { RequeteIoAnimal } from "../animal/RequeteIOAnimal";

@Injectable({
  providedIn: "root",
})
export class EnclosService {
  constructor(private http: HttpClient, private router: Router) {}
  requete: RequeteIoAnimal;

  getEnclosList() {
    return this.http
      .get<Enclos[]>("http://localhost:9003/api/enclos", {
        withCredentials: true,
      })
      .pipe(
        tap((enclosList) => console.table(enclosList)),
        catchError((error) => this.handleError(error, []))
      );
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  verifierEnclos(
    enclosId: string,
    obs: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(enclosId, obs, user);
    return this.http.post(
      "http://localhost:9003/api/enclos/controller",
      this.requete,
      { withCredentials: true }
    );
  }
}
