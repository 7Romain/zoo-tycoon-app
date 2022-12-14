import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "animalDateAge",
})
export class AnimalDateAgePipe implements PipeTransform {
  transform(date: Date): string {
    date = new Date(date);
    return new Number(
      (new Date().getTime() - date.getTime()) / 31536000000
    ).toFixed(0);
  }
}
