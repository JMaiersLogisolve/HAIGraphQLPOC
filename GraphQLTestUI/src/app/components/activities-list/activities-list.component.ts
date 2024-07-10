import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { CommonModule } from '@angular/common';
import { ApolloQueryResult } from '@apollo/client/core';
import { GridColumn } from '../../models/grid-column';
import { ColumnHeaderSortableComponent } from "../common/column-header-sortable/column-header-sortable.component";
import { SortParameter } from '../../models/sort-parameter';

@Component({
  selector: 'app-activities-list',
  standalone: true,
  imports: [CommonModule, ColumnHeaderSortableComponent],
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.css'
})
export class ActivitiesListComponent implements OnInit {
  activities: Activity[] = [];
  gridColumns: GridColumn[];
  sortParameter: SortParameter;
  loading = false;

  constructor(private activityService: ActivityService) {
    this.sortParameter = { field: 'id', isDescending: false };

    this.gridColumns = [
      { key: 'id', displayName: 'ID', isSortable: true },
      { key: 'desc', displayName: 'DESC', isSortable: true },
      { key: 'meas', displayName: 'MEAS', isSortable: true },
      { key: 'stkflw', displayName: 'STKFLW', isSortable: true },
      { key: 'sort', displayName: 'SORT', isSortable: true },
      { key: 'action', displayName: 'Action', isSortable: false },
    ]
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.activityService.getAllActivities(this.sortParameter).valueChanges.subscribe(queryResult => {
      this.activities = queryResult.data.allActivities;
      this.loading = queryResult.loading;
    });
  }

  selectedSortChanged(selectedSort: SortParameter) {
    this.sortParameter = selectedSort;
    this.loadData();
  }

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(
      // Since deleteActivity refetches the getAllActivities query, we don't actually have to do anything here
    );
  }
}
