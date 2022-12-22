import { Enclos } from "../enclos/enclos";
export class Evenement {
  id: number;

  id_personnel: string;

  id_enclos: Enclos;

  id_espece: string;

  id_animal: string;

  id_type_evenement: string;

  observations: string;

  moment: Date;
}
