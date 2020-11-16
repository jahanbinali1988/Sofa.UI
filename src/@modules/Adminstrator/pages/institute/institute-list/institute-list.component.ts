import { Component, OnInit } from '@angular/core';
import { State, process } from '@progress/kendo-data-query';
import { Institute } from 'src/@modules/Adminstrator/models/instittue';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { InstituteService } from 'src/@modules/Adminstrator/services/institute-services';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { DeleteInstituteResponse } from 'src/@modules/Adminstrator/Messages/Response/delete-institute-response';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})

export class InstituteListComponent implements OnInit {
  aircrafts: Institute[] = [];
  public gridData: GridDataResult;
  public gridState: State = {
      skip: 0,
      take: 10,
      sort: null,
      // Initial filter descriptor
      filter: {
        logic: 'and',
        filters: [{ field: 'title', operator: 'contains', value: '' }]
      }
  };

  constructor(private instituteService: InstituteService,
    private notifier: Notification) { 
    this.instituteService.GetAll(this.gridState).subscribe(response => {
      this.aircrafts = response.Institutes;
      this.gridData = process(this.aircrafts, this.gridState);
});
  }

  ngOnInit(): void {
  }

  public dataStateChange(newGridState: DataStateChangeEvent): void {
  this.gridState = newGridState;
  this.aircrafts.length = 0;
    this.instituteService.GetAll(this.gridState).subscribe(response => {
      this.aircrafts = response.Institutes;
      this.gridData = process(this.aircrafts, this.gridState);
    });
  } 

  public Remove(id) {
      this.instituteService.Remove(id).subscribe( response => {
          const result: DeleteInstituteResponse = response;
          if (result.IsSuccess === true) {
              this.gridData.data.find(f => {
                  if (f.Id === id) {
                      f.IsDeleted = !f.IsDeleted;
                  }
                  return null;
              });
              this.notifier.success(  result.Message );
          } else {
            this.notifier.warn( result.Message );
          }
      });

  }
}
