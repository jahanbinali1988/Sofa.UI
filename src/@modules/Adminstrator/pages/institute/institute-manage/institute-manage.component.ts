import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddInstituteResponse } from 'src/@modules/Adminstrator/Messages/institute/Response/add-institute-response';
import { InstituteService } from 'src/@modules/Adminstrator/services/institute.service';
import { Notification } from 'src/app/common/utilities/notification/notification';
import { ActivatedRoute } from '@angular/router';
import { AddInstituteRequest } from 'src/@modules/Adminstrator/Messages/institute/Request/add-institute-request';
import { GetInstituteRequest } from 'src/@modules/Adminstrator/Messages/institute/Request/get-institute-request';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
@Component({
  selector: 'app-institute-manage',
  templateUrl: './institute-manage.component.html',
  styleUrls: ['./institute-manage.component.css']
})
export class InstituteManageComponent implements OnInit {
  form = new FormGroup({    Id: new FormControl('', Validators.required),
    Title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Code: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    WebsiteUrl: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Address: new FormControl('', Validators.required),
    CreateDate: new FormControl('', Validators.required),
    Description: new FormControl('', [Validators.required, , Validators.maxLength(200)]),
    IsActive: new FormControl('false', Validators.required),
    IsDeleted: new FormControl('false', Validators.required),
    RowVersion: new FormControl(0, Validators.required),
  });

  constructor(private instituteService: InstituteService, 
    private route: ActivatedRoute, 
    private notifier: Notification,
    private authenticationService: AuthenticationService) {

      this.route.paramMap.subscribe(params => {
        if (+this.Id > 0) {
          const getByIdRequest: GetInstituteRequest = {
            InstituteId: this.Id
          }
          this.instituteService.Get(getByIdRequest)
          .subscribe(response => {
            const data = response.Institute;
              this.form.patchValue({Id: data['Id']});
              this.form.patchValue({Title: data['Title']});
              this.form.patchValue({Code: data['Code']});
              this.form.patchValue({WebsiteUrl: data['WebsiteUrl']});
              this.form.patchValue({CreateDate: data['CreateDate']});
              this.form.patchValue({Address: data['Address']});
              this.form.patchValue({Description: data['Description']});
              this.form.patchValue({IsActive: data['IsActive']});
              this.form.patchValue({IsDeleted: data['IsDeleted']});
              this.form.patchValue({ModifyDate: data['ModifyDate']});
              this.form.patchValue({RowVersion: data['RowVersion']});
          });
        }
    });
  }

  ngOnInit() {

  }

  public Create() {
    const request: AddInstituteRequest = {
      Address: this.Address.value,
      Code: this.Code.value,
      IsActive: this.IsActive.value,
      Title: this.Title.value,
      WebsiteUrl: this.WebsiteUrl.value,
      CommanderID: this.authenticationService.clientUserId()
    }
    this.instituteService.Create(request).subscribe( response => {
      const result: AddInstituteResponse = response;
      if (result.IsSuccess === true) {
        this.notifier.success( result.Message );
      } else {
        this.notifier.warn( result.Message );
      }
    });
  }

  get Id() {
    if (this.form.get('Id').value == null) {
      return this.form.get('Id').value;
    } else {
      return 0;
    }
  }
 get Title() {
      return this.form.get('Title');
  }
  get Code() {
    return this.form.get('Code');
  }
  get WebsiteUrl() {
    return this.form.get('WebsiteUrl');
  }
  get CreateDate() {
    return this.form.get('CreateDate');
  }
  get IsActive() {
    return this.form.get('IsActive');
  }
  get IsDeleted() {
    return this.form.get('IsDeleted');
  }
  get RowVersion() {
    return this.form.get('RowVersion');
  }
  get ModifyDate() {
    return this.form.get('ModifyDate');
  }
  get Description() {
  return this.form.get('Description');
  }
  get Address() {
    return this.form.get('Address');
  }
}
