let nextId = 1;

export class Hologram {
  id: number;
  constructor(
    public name: string,
    public gewicht: string,
    public superkraft: string,
    public ausgestorben_seit:string) {
      this.id = nextId++;
    }
}