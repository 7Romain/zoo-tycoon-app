import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { RequeteIoEvenement } from "./requeteIoEvenement";
import { Evenement } from "./evenement";
import { EvenementTypes } from "./evenementTypes";

@Injectable({
  providedIn: "root",
})
export class EvenementService {
  constructor(private http: HttpClient, private router: Router) {}
  requete: RequeteIoEvenement;
  private headers = new HttpHeaders({ "Content-Type": "application/text" });

  getEvenementList(): Observable<Evenement[]> {
    return this.http
      .get<Evenement[]>("http://localhost:9003/api/evenements", {
        withCredentials: true,
      })
      .pipe(
        tap((evenementList) => console.table(evenementList)),
        catchError((error) => this.handleError(error, []))
      );
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  creerEvenement(
    id_personnel: string | null,
    id_enclos: string,
    id_espece: string,
    id_animal: string,
    id_type_evenement: string,
    observations: string
  ): Observable<Evenement> {
    console.log(observations);

    this.requete = new RequeteIoEvenement(
      id_personnel,
      id_type_evenement,
      observations
    );
    if (id_animal) {
      this.requete.setIdAnimal(id_animal);
    } else {
      this.requete.setIdAnimal("");
    }
    if (id_espece) {
      this.requete.setIdEspece(id_espece);
    } else {
      this.requete.setIdEspece("");
    }
    if (id_enclos) {
      this.requete.setIdEnclos(id_enclos);
    } else {
      this.requete.setIdEnclos("");
    }
    console.log(this.requete);

    return this.http.post<Evenement>(
      "http://localhost:9003/api/evenements/creer",
      this.requete,
      { withCredentials: true }
    );
  }

  getTypesList(): Observable<EvenementTypes[]> {
    return this.http.get<EvenementTypes[]>(
      "http://localhost:9003/api/evenements/types",
      { withCredentials: true }
    );
  }
  getEventZone(zoneId: string | null): Observable<Evenement[]> {
    return this.http
      .get<Evenement[]>(
        `http://localhost:9003/api/evenements/zones/${zoneId}`,
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap((event) => console.log(event)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getTypeNom(id: string): Observable<EvenementTypes> {
    return this.http.get<EvenementTypes>(
      `http://localhost:9003/api/evenements/types/nom/${id}`,
      { withCredentials: true }
    );
  }

  getEventEnclos(enclosId: string | null): Observable<Evenement[]> {
    return this.http
      .get<Evenement[]>(
        `http://localhost:9003/api/evenements/enclos/${enclosId}`,
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap((event) => console.log(event)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getEventEspece(id: string | null): Observable<Evenement[]> {
    return this.http
      .get<Evenement[]>(`http://localhost:9003/api/evenements/especes/${id}`, {
        withCredentials: true,
      })
      .pipe(
        tap((event) => console.log(event)),
        catchError((error) => this.handleError(error, undefined))
      );
  }
  getEventAnimal(id: string | null): Observable<Evenement[]> {
    return this.http
      .get<Evenement[]>(`http://localhost:9003/api/evenements/animaux/${id}`, {
        withCredentials: true,
      })
      .pipe(
        tap((event) => console.log(event)),
        catchError((error) => this.handleError(error, undefined))
      );
  }
}
