import { Pipe, PipeTransform } from "@angular/core";
import { EnclosService } from "../enclos/enclos.service";

@Pipe({
  name: "datePipe",
})
export class DatePipe implements PipeTransform {
  transform(date: number[]): string {
    let datePropre: string = "";

    datePropre =
      date[2] + "/" + date[1] + "/" + date[0] + "  " + date[3] + "h" + date[4];

    return datePropre;
  }
}
