import { Component, inject, Input, TemplateRef } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Hologram } from '../models/hologram';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-edit-hologram',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-hologram.component.html',
})
export class NgbdModalEditHologram {
  private modalService = inject(NgbModal);
  closeResult = '';
  @Input() selected?: Hologram;
  name: string = '';
  gewicht: string = '';
  superkraft: string = '';
  ausgestorben_seit: string = '';
  @Input() update: any;

  open(content: TemplateRef<any>) {
    if (this.selected) {
      this.name = this.selected.name;
      this.gewicht = this.selected.gewicht;
      this.superkraft = this.selected.superkraft;
      this.ausgestorben_seit = this.selected.ausgestorben_seit;
    }

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        () => {
          if (this.selected) {
            this.update(this.selected.id, this.name, this.gewicht, this.superkraft, this.ausgestorben_seit);
          }
          this.resetForm();
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  private resetForm() {
    this.name = '';
    this.gewicht = '';
    this.superkraft = '';
    this.ausgestorben_seit = '';
    this.selected = undefined;
  }
}
