import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Animal } from "./animal";
import { RequeteIoAnimal } from "./RequeteIOAnimal";

@Injectable({
  providedIn: "root",
})
export class AnimalService {
  constructor(private http: HttpClient) {}

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

  rentrerAnimal(animalId: string, observations: string): any {
    this.requete = new RequeteIoAnimal(animalId, observations);
    console.log(this.requete);

    this.http
      .post(
        "http://localhost:9003/api/animaux/entrer",
        this.requete

        // ,{withCredentials: true,}
      )
      .subscribe((result: any) => {
        console.log(result);
        location.reload();
      });

    // return new Observable(() => {
    //   console.log(animalId + observations);
    //   this.http
    //     .post(
    //       "http://localhost:9003/api/animaux/entrer",
    //       this.requete

    //       // ,{withCredentials: true,}
    //     )
    //     .subscribe((result: any) => {
    //       console.log(result);
    //     });
    // });
    // console.log(animalId + observations);
  }

  sortirAnimal(animalId: string, observations: string): any {
    this.requete = new RequeteIoAnimal(animalId, observations);
    console.log(this.requete);

    this.http
      .post(
        "http://localhost:9003/api/animaux/sortir",
        this.requete

        // ,{withCredentials: true,}
      )
      .subscribe((result: any) => {
        console.log(result);
        location.reload();
      });

    // test(animalId: string, observations: string) {
    //   console.log("animal rentré" + animalId + " et " + observations);
    // }
  }
}
