import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {
  @Input() public modalHeader = '';
  @Input() public modalBody = '';
  @Input() public cancelButtonText = 'Cancel'
  @Input() public actionButtonText = 'Ok'
  @Input() public alternateActionButtonText = ''
 
  constructor(public activeModal: NgbActiveModal) { }

  ok() {
    this.activeModal.close(this.actionButtonText);
  }

  alternateAction() {
    if (this.alternateActionButtonText) {
      this.activeModal.close(this.alternateActionButtonText);
    }
  }

  close() {
    this.activeModal.close(this.cancelButtonText);
  }
}
