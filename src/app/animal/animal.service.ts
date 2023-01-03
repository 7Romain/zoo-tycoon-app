import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Animal } from "./animal";
import { RequeteIoAnimal } from "./RequeteIOAnimal";
import { Router } from "@angular/router";
import { Enclos } from "../enclos/enclos";

@Injectable({
  providedIn: "root",
})
export class AnimalService {
  constructor(private http: HttpClient, private router: Router) {}

  requete: RequeteIoAnimal;

  getAnimalList(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:9003/api/animaux").pipe(
      tap((animalList) => console.table(animalList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getAnimalById(animalId: string): Observable<Animal | undefined> {
    return this.http
      .get<Animal>(`http://localhost:9003/api/animaux/${animalId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((animal) => console.log(animal)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getEnclosByAnimalId(animalId: string): Observable<Enclos[]> {
    return this.http
      .get<Enclos[]>(`http://localhost:9003/api/enclos/animal/${animalId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((enclos) => console.log(enclos)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  rentrerAnimal(
    animalId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(animalId, observations, user);
    return this.http.post(
      "http://localhost:9003/api/animaux/entrer",
      this.requete,
      { withCredentials: true }
    );
  }

  sortirAnimal(
    animalId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(animalId, observations, user);
    return this.http.post(
      "http://localhost:9003/api/animaux/sortir",
      this.requete,
      { withCredentials: true }
    );
  }

  soignerAnimal(
    animalId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(animalId, observations, user);
    return this.http.post(
      "http://localhost:9003/api/animaux/soigner",
      this.requete,
      { withCredentials: true }
    );
  }

  stimulerAnimal(
    animalId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(animalId, observations, user);
    return this.http.post(
      "http://localhost:9003/api/animaux/stimuler",
      this.requete,
      { withCredentials: true }
    );
  }

  nourrirAnimal(
    animalId: string,
    observations: string,
    user: string | null
  ): Observable<any> {
    this.requete = new RequeteIoAnimal(animalId, observations, user);
    return this.http.post(
      "http://localhost:9003/api/animaux/nourrir",
      this.requete,
      { withCredentials: true }
    );
  }

  getAnimalListByEnclos(enclosId: string): Observable<Animal[]> {
    return this.http
      .get<Animal[]>(`http://localhost:9003/api/animaux/enclos/${enclosId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((animal) => console.log(animal)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  getAnimalListByEspece(especeId: string): Observable<Animal[]> {
    return this.http
      .get<Animal[]>(`http://localhost:9003/api/animaux/espece/${especeId}`, {
        withCredentials: true,
      })
      .pipe(
        tap((animal) => console.log(animal)),
        catchError((error) => this.handleError(error, undefined))
      );
  }
}
