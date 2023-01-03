import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { Enclos } from "./enclos";
import { RequeteIoAnimal } from "../animal/RequeteIOAnimal";
import { Zone } from "./zone";

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

  getEnclosListByEspece(especeId: string): Observable<Enclos[]> {
    return this.http
      .get<Enclos[]>(`http://localhost:9003/api/enclos/espece/${especeId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((reponse) => console.log(reponse)),
        catchError((error) => this.handleError(error, undefined))
      );
  }
  getEnclosListByAnimal(animalId: string): Observable<Enclos[]> {
    return this.http
      .get<Enclos[]>(`http://localhost:9003/api/enclos/animal/${animalId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((reponse) => console.log(reponse)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getZonesList(): Observable<Zone[]> {
    return this.http
      .get<Zone[]>("http://localhost:9003/api/enclos/zones", {
        withCredentials: true,
      })
      .pipe(
        tap((reponse) => console.log("et la " + reponse)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getEnclosNomById(enclosId: string): Observable<string> {
    return this.http
      .get<string>(`http://localhost:9003/api/enclos/nom/${enclosId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((event) => console.log(event)),
        catchError((error) => this.handleError(error, undefined))
      );
  }
}
