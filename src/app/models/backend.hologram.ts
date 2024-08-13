import { Injectable, Type } from "@angular/core";
import { Hologram } from "../models/hologram";

const Holograms: Hologram[] = [
  new Hologram('Wanderfalke', '100kg', 'Fliegen', '2020'),
  new Hologram('Mauersegler', '200kg', 'Leben in der Luft', '2022'),
];

@Injectable({ providedIn: 'root' })
export class BackendService {
  private Holograms: Hologram[] = [];

  constructor() {
    this.Holograms = [...Holograms];
  }

  getHolograms(type: Type<any>): Promise<Hologram[]> {
      return Promise.resolve<Hologram[]>(this.Holograms);

  }

  updateHologram(id: number, name: string, gewicht: string, superkraft: string, ausgestorben_seit: string): void {
    const hologram = this.Holograms.find(el => el.id === id);
    if (hologram) {
      hologram.name = name;
      hologram.gewicht = gewicht;
      hologram.superkraft = superkraft;
      hologram.ausgestorben_seit = ausgestorben_seit;
    }
  }

  addHologram(name: string, gewicht: string, superkraft: string, ausgestorben_seit: string): void {
    const newHologram = new Hologram(name, gewicht, superkraft, ausgestorben_seit);
    this.Holograms.push(newHologram);
  }

  deleteHologram(id: number): void {
    const index = this.Holograms.findIndex(el => el.id === id);
    if (index !== -1) {
      this.Holograms.splice(index, 1);
    }
  }
}

