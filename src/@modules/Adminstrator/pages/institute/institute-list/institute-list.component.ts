import { Component, OnInit } from '@angular/core';
import { Institute } from 'src/@modules/Adminstrator/models/instittue';
import { InstituteService } from 'src/@modules/Adminstrator/services/institute-services';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { DeleteInstituteResponse } from 'src/@modules/Adminstrator/Messages/Response/delete-institute-response';
import { GetAllInstituteRrequest } from 'src/@modules/Adminstrator/Messages/Request/get-all-institute-request';
import { DeleteInstituteRequest } from 'src/@modules/Adminstrator/Messages/Request/delete-institute-request';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})

export class InstituteListComponent implements OnInit {
  institutes: Institute[] = [];
  

  constructor(private instituteService: InstituteService,
    private notifier: Notification,
    private authenticationService: AuthenticationService) { 
      
  }

  ngOnInit(): void {
    const getAllRequest: GetAllInstituteRrequest ={
      PageIndex: 1,
      PageSize: 10,
      OrderedBy: "Title", 
      Accending: false
    }

    this.instituteService.GetAll(getAllRequest).subscribe(response => {
      this.institutes = response.Institutes;
      console.log(this.institutes);
      });
  }

  public Remove(id: string) {
    const deleteRequest: DeleteInstituteRequest = {
      Id: id,
      CommanderID: this.authenticationService.clientUserId()
    }
      this.instituteService.Remove(deleteRequest).subscribe( response => {
          const result: DeleteInstituteResponse = response;
          if (result.IsSuccess === true) {
              this.notifier.success(  result.Message );
          } else {
            this.notifier.warn( result.Message );
          }
      });

  }
}
