export class RequeteIoAnimal {
  idAnimal: string;
  iDPersonnel: number;
  observations: string;

  constructor(idAnimal: string, observations: string) {
    this.idAnimal = idAnimal;
    this.observations = observations;
  }
}
