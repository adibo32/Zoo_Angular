import { Component, Input, inject, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Hologram } from '../models/hologram';

@Component({
  selector: 'ngbd-modal-delete-hologram',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-hologram.component.html',
})
export class NgbdModalDeleteHologram {
  private modalService = inject(NgbModal);
  closeResult = '';
  @Input() hologramToDelete?: Hologram;
  @Input() delete: (id: number) => void = () => {};

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          if (result === 'Delete') {
            if (this.hologramToDelete) {
              this.delete(this.hologramToDelete.id);
            }
          }
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
