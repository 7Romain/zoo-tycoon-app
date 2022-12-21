import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Espece } from "../espece/espece";

import { Router } from "@angular/router";
import { Animal } from "../animal/animal";
import { Enclos } from "./enclos";

@Injectable({
  providedIn: "root",
})
export class EnclosService {
  constructor(private http: HttpClient, private router: Router) {}

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
}
