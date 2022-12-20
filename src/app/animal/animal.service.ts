import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Animal } from "./animal";
import { RequeteIoAnimal } from "./RequeteIOAnimal";
import { Router } from "@angular/router";

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
    return this.http.get<Animal>(`api/animaux/${animalId}`).pipe(
      tap((animal) => console.log(animal)),
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
}
