import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortParameter } from '../../../models/sort-parameter';
import { GridColumn } from '../../../models/grid-column';

@Component({
  selector: 'app-column-header-sortable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column-header-sortable.component.html',
  styleUrls: ['./column-header-sortable.component.css']
})
export class ColumnHeaderSortableComponent  {
  @Input() column: GridColumn | undefined;
  @Input() selectedSort: SortParameter | undefined;
  @Output() selectedSortChange: EventEmitter<SortParameter> = new EventEmitter<SortParameter>();

  public setSort(key: string | undefined) {
    if (key && this.selectedSort) {
      this.selectedSort.isDescending = this.selectedSort.field === key ? !this.selectedSort.isDescending : false;
      this.selectedSort.field = key;
      this.selectedSortChange.emit(this.selectedSort);
    }
  }
}
