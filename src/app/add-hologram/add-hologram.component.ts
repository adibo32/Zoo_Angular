import { Component, inject, Input, TemplateRef } from '@angular/core';

import {
  ModalDismissReasons,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Hologram } from '../models/hologram';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-add-hologram',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-hologram.component.html',
})
export class NgbdModalAddhologram {
  private modalService = inject(NgbModal);
  closeResult = '';
  @Input() selected?: Hologram;
  name: string = '';
  gewicht: string = '';
  superkraft: string = '';
  ausgestorben_seit: string = '';
  @Input() add: any;

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        () => {
          this.add(this.name, this.gewicht, this.superkraft, this.ausgestorben_seit);
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
}