import { Enclos } from "../enclos/enclos";

export class Espece {
  id: string;

  nom: string;

  sociable: boolean;

  observations: string;

  dangereux: boolean;

  enclos: Enclos;
}
