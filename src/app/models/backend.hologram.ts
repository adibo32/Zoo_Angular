import { Injectable, Type } from "@angular/core";
import { Hologram } from "../models/hologram";

const Holograms: Hologram[] = [
  new Hologram('Test 1', '100kg', 'Fliegen', '2020'),
  new Hologram('Test 2', '200kg', 'Unsichtbarkeit', '2022'),
];

@Injectable({ providedIn: 'root' })
export class BackendService {
  private Holograms: Hologram[] = [];

  constructor() {
    this.Holograms = [...Holograms];
  }

  getHolograms(type: Type<any>): Promise<Hologram[]> {
    if (type === Hologram) {
      return Promise.resolve<Hologram[]>(this.Holograms);
    }
    return Promise.reject(new Error('Cannot get object of this type'));
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

