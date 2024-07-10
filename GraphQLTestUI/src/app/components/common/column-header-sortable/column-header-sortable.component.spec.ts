import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHeaderSortableComponent } from './column-header-sortable.component';

describe('ColumnHeaderSortableComponent', () => {
  let component: ColumnHeaderSortableComponent;
  let fixture: ComponentFixture<ColumnHeaderSortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnHeaderSortableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnHeaderSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
