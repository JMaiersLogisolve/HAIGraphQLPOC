import { Injectable } from '@angular/core';
import { GET_ALL_ACTIVITIES } from '../graphql/activity-queries';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { AllActivitiesResult } from '../models/all-activities-result';
import { SortParameter } from '../models/sort-parameter';
import { ActivitySortInput } from '../models/graphql-query-helpers/activity-sort-input';
import { SortEnumType } from '../models/graphql-query-helpers/sort-enum-type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMessageComponent } from '../components/common/modal-message/modal-message.component';
import { Observable, Observer } from 'rxjs';
import { DELETE_ACTIVITY } from '../graphql/activity-mutations';
import { DeleteActivityResult } from '../models/delete-activity-result';

@Injectable({
  providedIn: 'root'
})
export class ActivityService  {
  private currentSort: SortParameter = { field: 'id', isDescending: false };

  constructor(private readonly apollo: Apollo, private modalService: NgbModal) {}

  public getAllActivities(sortParameter: SortParameter): QueryRef<AllActivitiesResult> {
    this.currentSort = sortParameter;
    let activitySortInput = this.setActivitySort(sortParameter);

    return this.apollo.watchQuery<AllActivitiesResult>({
      query: GET_ALL_ACTIVITIES,
      // pollInterval: 500,
      variables: {
        orderField: activitySortInput
      }
    });
  }

  public deleteActivity(id: number) {
    const modalRef = this.modalService.open(ModalMessageComponent, { centered: true, size: 'md', scrollable: false });
    const action = 'Delete';

    modalRef.componentInstance.modalHeader = 'Delete Activity';
    modalRef.componentInstance.modalBody = 'Are you sure you want to delete this activity?';
    modalRef.componentInstance.actionButtonText = action;

    return new Observable((observer: Observer<boolean>) => {
      modalRef.result.then((result: string) => {
        if (result && result === action) {
          this.apollo.mutate<DeleteActivityResult>({
            mutation: DELETE_ACTIVITY,
            variables: {
              id: id
            }
          }).subscribe({
            next: (result: MutationResult<DeleteActivityResult>) => {
              if (result.data?.deleteActivity.errors) {
                const errorModalRef = this.modalService.open(ModalMessageComponent, { centered: true, size: 'md', scrollable: false });
                errorModalRef.componentInstance.modalHeader = "ERROR";
                errorModalRef.componentInstance.modalBody = result.data.deleteActivity.errors[0].message;
                errorModalRef.componentInstance.actionButtonText = '';

                observer.next(false);
                observer.complete();
              } else if (result.data?.deleteActivity.boolean) {
                this.getAllActivities(this.currentSort).refetch();
                
                observer.next(true);
                observer.complete();  
              } else {
                observer.next(false);
                observer.complete();
              }
            },
            error: (error: any) => {
              console.log(error);
              observer.next(false);
              observer.complete();
            }
          })
        }
      })
    });
  }

  private setActivitySort(sortParameter: SortParameter): ActivitySortInput[] {
    let activitySortInput: ActivitySortInput = { id: undefined, desc: undefined, meas: undefined, stkflw: undefined, sort: undefined };

    // I absolutely hate this so much and there has to be a better way
    switch (sortParameter.field) {
      case 'id':
        activitySortInput.id = sortParameter.isDescending ? SortEnumType.DESC : SortEnumType.ASC;
        break;
      case 'desc':
        activitySortInput.desc = sortParameter.isDescending ? SortEnumType.DESC : SortEnumType.ASC;
        break;
      case 'meas':
        activitySortInput.meas = sortParameter.isDescending ? SortEnumType.DESC : SortEnumType.ASC;
        break;
      case 'stkflw':
        activitySortInput.stkflw = sortParameter.isDescending ? SortEnumType.DESC : SortEnumType.ASC;
        break;
      case 'sort':
        activitySortInput.sort = sortParameter.isDescending ? SortEnumType.DESC : SortEnumType.ASC;
        break;
    }

    return [activitySortInput];
  }
}
