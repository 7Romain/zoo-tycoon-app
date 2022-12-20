export class RequeteIoAnimal {
  idAnimal: string;
  username: string | null;
  observations: string;

  constructor(idAnimal: string, observations: string, username: string | null) {
    this.idAnimal = idAnimal;
    this.observations = observations;
    this.username = username;
  }
}
