export class RequeteIoEvenement {
  id_personnel: string | null;
  id_enclos: string;
  id_espece: string;
  id_animal: string;
  id_type_evenement: string;
  observations: string;

  constructor(
    id_personnel: string | null,
    id_type_evenement: string,
    observations: string
  ) {
    this.id_personnel = id_personnel;
    this.id_type_evenement = id_type_evenement;
    this.observations = observations;
  }

  setIdEnclos(id: string) {
    this.id_enclos = id;
  }

  setIdEspece(id: string) {
    this.id_espece = id;
  }

  setIdAnimal(id: string) {
    this.id_animal = id;
  }
}
