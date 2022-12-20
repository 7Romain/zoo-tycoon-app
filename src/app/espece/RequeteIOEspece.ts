export class RequeteIoEspece {
  idEspece: string;
  username: string | null;
  observations: string;
  idAnimaux: string[] | null;

  constructor(
    idEspece: string,
    observations: string,
    username: string | null,
    idAnimaux: string[] | null
  ) {
    this.idEspece = idEspece;
    this.observations = observations;
    this.username = username;
    this.idAnimaux = idAnimaux;
  }
}
