export class User {
  id: number;

  username: string;

  email: string;

  roles: string[];

  loadFromJSON(jsonElement: any) {
    Object.assign(this, jsonElement);
  }
}
