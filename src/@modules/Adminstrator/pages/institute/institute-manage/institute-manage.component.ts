import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddInstituteResponse } from 'src/@modules/Adminstrator/Messages/Response/add-institute-response';
import { Institute } from 'src/@modules/Adminstrator/models/instittue';
import { InstituteService } from 'src/@modules/Adminstrator/services/institute-services';
import { ValueText } from 'src/app/common/models/base/ValueText';
import { Notification } from 'src/app/common/utilities/notification/notification';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-institute-manage',
  templateUrl: './institute-manage.component.html',
  styleUrls: ['./institute-manage.component.css']
})
export class InstituteManageComponent implements OnInit {
  AirlineItems: ValueText[] = [];
  filteredOptions: Observable<ValueText[]>;

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

    AirlineCaption: new FormControl('', Validators.required)
  });

  constructor(private instituteService: InstituteService, 
    private route: ActivatedRoute, 
    private notifier: Notification) {

      this.route.paramMap.subscribe(params => {
        if (+params.get('id') > 0) {
          this.instituteService.Get(+params.get('id'))
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
   this.form.controls.AirlineCaption.valueChanges.pipe(
      startWith(''),
      map(value => {
        this._filter(value);
      })
    ).subscribe(response => {
      return response;
    });
  }

  autoCompleteOnChange(text) {
    this.form.patchValue({AirlineId:
      this.AirlineItems.find(c => c.Text === text).Value});
  }

  public Create() {
    const institute: Institute = {
      Id: this.Id.value,
      Title: this.Title.value,
      Code: this.Code.value,
      WebsiteUrl: this.WebsiteUrl.value,
      CreateDate: this.CreateDate.value,
      Address: this.Address.value,
      Description: this.Description.value,
      IsActive: this.IsActive.value,
      IsDeleted: this.IsDeleted.value,
      ModifyDate: this.ModifyDate.value,
      RowVersion: this.RowVersion.value
    };
    this.instituteService.Create(institute).subscribe( response => {
      const result: AddInstituteResponse = response;
      if (result.IsSuccess === true) {
        this.notifier.success( result.Message );
      } else {
        this.notifier.warn( result.Message );
      }
    });
  }

  private _filter(value: string): ValueText[] {
    const items: ValueText[] = [];
    this.instituteService.Search_Institute(value).subscribe(response => {
      for (const key in response.Data) {
        if (response.Data.hasOwnProperty(key)) {
          items.push({Value: response.Data[key].Value, Text: response.Data[key].Text});
        }
      }
    });
    this.AirlineItems = items;
    return items;
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
