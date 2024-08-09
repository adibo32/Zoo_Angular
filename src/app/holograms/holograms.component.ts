import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { HologramService } from "../service/hologram.service";
import { NgbdModalAddhologram } from "../add-hologram/add-hologram.component";
import { Hologram } from "../models/hologram";
import { NgbdModalEditHologram } from "../edit-hologram/edit-hologram.component";
import { NgbdModalDeleteHologram } from "../delete-hologram/delete-hologram.component";



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
  ],

  providers: [HologramService],
})
export class HologramsComponent implements OnInit {
  holograms: Hologram[] = [];
  selectedHologram: Hologram | undefined;
  constructor(private service: HologramService) {}

  ngOnInit() {
    this.holograms = this.service.getHolograms();
  }

  updateHologram = (id: number, name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) => {
    const hologram = this.holograms.find(el => el.id === id);
    if (hologram) {
      hologram.name = name;
      hologram.gewicht = gewicht;
      hologram.superkraft = superkraft;
      hologram.ausgestorben_seit = ausgestorben_seit;
    }
  };
  
  addHologram = (name: string, gewicht: string, superkraft: string, ausgestorben_seit: string) => {
    let newHologram = new Hologram(name, gewicht, superkraft, ausgestorben_seit);
    this.holograms.push(newHologram);
  };

  deleteHologram = (id: number) => {
    this.holograms = this.holograms.filter(el => el.id !== id);
  };
  
}