import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailModalComponent } from './activity-detail-modal.component';

describe('ActivityDetailModalComponent', () => {
  let component: ActivityDetailModalComponent;
  let fixture: ComponentFixture<ActivityDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityDetailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
