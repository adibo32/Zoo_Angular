import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { HologramService } from "../service/hologram.service";
import { NgbdModalAddhologram } from "../add-hologram/add-hologram.component";
import { Hologram } from "../models/hologram";
import { NgbdModalEditHologram } from "../edit-hologram/edit-hologram.component";
import { NgbdModalDeleteHologram } from "../delete-hologram/delete-hologram.component";
import { FormsModule } from "@angular/forms";
import { NotificationService } from "../notification/notification.service";
import { NotificationModule } from "../notification/notification.module";

@Component({
  standalone: true,
  selector: 'app-hologram-list',
  templateUrl: './holograms.component.html',
  styleUrls: ['./holograms.component.css'],
  imports: [
    NgFor,
    NgIf,
    NgbdModalAddhologram,
    NgbdModalEditHologram,
    NgbRatingModule,
    NgbdModalDeleteHologram,
    FormsModule,
    NotificationModule,
  ],
  providers: [
    HologramService,
    NotificationService,
  ],
})
export class HologramsComponent implements OnInit {
  holograms: Hologram[] = [];
  filterTerm: string = '';
  sortColumn: string = 'name';
  sortOrder: string = 'asc';
  selectedHologram: Hologram | undefined;
  filteredHolograms: Hologram[] = [];

  constructor(private service: HologramService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.holograms = this.service.getHolograms();
    this.filteredHolograms = [...this.holograms];
  }

  applyFilter() {
    this.filteredHolograms = this.filteredAndSortedHolograms();
  }

  updateHologram = (id: number, name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) => {
    const hologram = this.holograms.find(el => el.id === id);
    if (hologram) {
      hologram.name = name;
      hologram.gewicht = gewicht;
      hologram.superkraft = superkraft;
      hologram.ausgestorben_seit = ausgestorben_seit;
      this.notificationService.showMessage('Die Änderungen  wurden erfolgreich gespeichert.');
    }
  };

  addHologram = (name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) => {
    let newHologram = new Hologram(name, gewicht, superkraft, ausgestorben_seit);
    this.holograms.push(newHologram);
    this.notificationService.showMessage('Das Hologramm  wurde erfolgreich hinzugefügt.');
    this.applyFilter();
  };

  deleteHologram = (id: number) => {
    this.holograms = this.holograms.filter(el => el.id !== id);
    this.notificationService.showMessage('Das Hologramm wurde erfolgreich gelöscht.');
    this.applyFilter();
  };

  filteredAndSortedHolograms(): Hologram[] {
    return this.holograms
      .filter(hologram => 
        hologram.name.toLowerCase().includes(this.filterTerm.toLowerCase())
      )
      .sort((a, b) => {
        let comparison = 0;
        if (a[this.sortColumn as keyof Hologram] > b[this.sortColumn as keyof Hologram]) {
          comparison = 1;
        } else if (a[this.sortColumn as keyof Hologram] < b[this.sortColumn as keyof Hologram]) {
          comparison = -1;
        }
        return this.sortOrder === 'asc' ? comparison : -comparison;
      });
  }
}
