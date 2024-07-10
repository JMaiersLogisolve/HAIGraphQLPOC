import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-detail-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activity-detail-modal.component.html',
  styleUrl: './activity-detail-modal.component.css'
})
export class ActivityDetailModalComponent implements OnInit {
  @Input() activity = <Activity>{};

  editing = false;
  submitted = false;

  id = new FormControl<number | null>(null, Validators.required);
  desc = new FormControl('', Validators.required);
  meas = new FormControl('', Validators.required);
  stkflw = new FormControl('', Validators.required);
  sort = new FormControl('', Validators.required);

  editForm = new FormGroup({
    id: this.id,
    desc: this.desc,
    meas: this.meas,
    stkflw: this.stkflw,
    sort: this.sort,
  })

  constructor(public activeModal: NgbActiveModal, private activityService: ActivityService) { }

  ngOnInit() {
    if (this.activity) {
      this.editing = true;
      
      this.id.setValue(this.activity.id);
      this.desc.setValue(this.activity.desc);
      this.meas.setValue(this.activity.meas);
      this.stkflw.setValue(this.activity.stkflw)
      this.sort.setValue(this.activity.sort);
    }
  }

  onSubmit() {
    this.submitted = true;
    // Actually call the edit function here
  }

  closeModal() {
    this.activeModal.close('Cancel');
  }
}
