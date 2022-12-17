export class User {
  id: number;

  username: string | null;

  email: string;

  roles: string[];

  loadFromJSON(jsonElement: any) {
    Object.assign(this, jsonElement);
  }
}
