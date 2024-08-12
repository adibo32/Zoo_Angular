import { Injectable } from '@angular/core';
import { Hologram } from '../models/hologram';
import { BackendService } from '../models/backend.hologram';
import { NotificationService } from '../notification/notification.service';

@Injectable({ providedIn: 'root' })
export class HologramService {

  private Holograms: Hologram[] = [];

  constructor(
    private backend: BackendService,
    private notification: NotificationService) {}

  getHolograms() {
    this.backend.getHolograms(Hologram).then((Holograms: Hologram[]) => {
      this.Holograms.push(...Holograms);
      this.notification.showMessage('Holograms successfully loaded.');
    });
    return this.Holograms;
  }

  addHologram(name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) {
    let newHologram = new Hologram(name, gewicht, superkraft, ausgestorben_seit);
    this.Holograms.push(newHologram);
  }

  updateHologram(id: number, name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) {
    const hologram = this.Holograms.find(el => el.id === id);
    if (hologram) {
      hologram.name = name;
      hologram.gewicht = gewicht;
      hologram.superkraft = superkraft;
      hologram.ausgestorben_seit = ausgestorben_seit;
      this.notification.showMessage('Hologram updated successfully!');
    } else {
      this.notification.showMessage('Hologram not found!');
    }
    }

  deleteHologram(id: number) {
    const index = this.Holograms.findIndex(el => el.id === id);
    if (index !== -1) {
      this.Holograms.splice(index, 1);
      this.notification.showMessage('Hologram deleted successfully!');
    } else {
      this.notification.showMessage('Hologram not found!');
    }
  }
}
