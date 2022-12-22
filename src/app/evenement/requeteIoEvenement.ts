import { Enclos } from "../enclos/enclos";

export class RequeteIoEvenement {
  id_personnel: string;
  id_enclos: string;
  id_espece: string;
  id_animal: string;
  id_type_evenement: string;
  observations: string;

  constructor(
    id_personnel: string,
    id_enclos: string,
    id_espece: string,
    id_animal: string,
    id_type_evenement: string,
    observations: string
  ) {
    this.id_personnel = id_personnel;
    this.id_type_evenement = id_type_evenement;
    this.observations = observations;
  }
}
