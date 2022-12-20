import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Espece } from "./espece";
import { RequeteIoEspece } from "./RequeteIOEspece";
import { Router } from "@angular/router";
import { Animal } from "../animal/animal";

@Injectable({
  providedIn: "root",
})
export class EspeceService {
  constructor(private http: HttpClient, private router: Router) {}
  requete: RequeteIoEspece;

  getEspeceList(): Observable<Espece[]> {
    return this.http
      .get<Espece[]>("http://localhost:9003/api/especes", {
        withCredentials: true,
      })
      .pipe(
        tap((especeList) => console.table(especeList)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getListAnimaux(especeId: string): Observable<Animal[]> {
    return this.http
      .get<Animal[]>(`http://localhost:9003/api/animaux/espece/${especeId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((animalList) => console.table("first log" + animalList)),
        catchError((error) => this.handleError(error, []))
      );
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  sortirEspece(
    especeId: string,
    observations: string,
    user: string | null,
    idAnimaux: string[] | null
  ): Observable<any> {
    this.requete = new RequeteIoEspece(especeId, observations, user, idAnimaux);
    return this.http.post(
      "http://localhost:9003/api/especes/sortir",
      this.requete,
      { withCredentials: true }
    );
  }

  rentrerEspece(
    especeId: string,
    observations: string,
    user: string | null,
    idAnimaux: string[] | null
  ): Observable<any> {
    this.requete = new RequeteIoEspece(especeId, observations, user, idAnimaux);
    return this.http.post(
      "http://localhost:9003/api/especes/rentrer",
      this.requete,
      { withCredentials: true }
    );
  }

  soignerEspece(
    especeId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoEspece(especeId, observations, user, []);
    return this.http.post(
      "http://localhost:9003/api/especes/soigner",
      this.requete,
      { withCredentials: true }
    );
  }

  stimulerEspece(
    especeId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoEspece(especeId, observations, user, []);
    return this.http.post(
      "http://localhost:9003/api/especes/stimuler",
      this.requete,
      { withCredentials: true }
    );
  }

  nourrirEspece(
    especeId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoEspece(especeId, observations, user, []);
    return this.http.post(
      "http://localhost:9003/api/especes/nourrir",
      this.requete,
      { withCredentials: true }
    );
  }
}
