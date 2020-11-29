import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperationStatus } from 'src/app/common/models/base/OperationStatus';
import { Config } from 'src/app/common/models/base/config';
import { ConfigService } from 'src/app/common/services/Config.Service';
import { AddInstituteResponse } from '../Messages/institute/Response/add-institute-response';
import { UpdateInstituteResponse } from '../Messages/institute/Response/update-institute-response';
import { GetInstituteResponse } from '../Messages/institute/Response/get-institute-response';
import { GetAllInstituteResponse } from '../Messages/institute/Response/get-all-institute-response';
import { DeleteInstituteResponse } from '../Messages/institute/Response/delete-institute-response';
import { GetAllInstituteRrequest } from '../Messages/institute/Request/get-all-institute-request';
import { AddInstituteRequest } from '../Messages/institute/Request/add-institute-request';
import { GetInstituteRequest } from '../Messages/institute/Request/get-institute-request';
import { UpdateInstituteRequest } from '../Messages/institute/Request/update-institue-request';
import { DeleteInstituteRequest } from '../Messages/institute/Request/delete-institute-request';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

    config: Config;
    apiUrl: string;
    httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor( private http: HttpClient,
    private configService: ConfigService ) {
    this.config = this.configService.Get();
    this.apiUrl = this.config.API_Url + '/Institute';
  }

  Create (request: AddInstituteRequest): Observable<AddInstituteResponse> {
    return this.http.post<AddInstituteResponse>(this.apiUrl + '/Add', request, this.httpOptions);
  }

  Update (request: UpdateInstituteRequest): Observable<UpdateInstituteResponse> {
    return this.http.post<UpdateInstituteResponse>(this.apiUrl + '/Update', request, this.httpOptions);
  }

  Get (request: GetInstituteRequest): Observable<GetInstituteResponse> {
    return this.http.post<GetInstituteResponse>(this.apiUrl + '/Get', request, this.httpOptions);
  }

  GetAll(request: GetAllInstituteRrequest): Observable<GetAllInstituteResponse> {
    return this.http.post<GetAllInstituteResponse>(this.apiUrl + '/GetAll', request, this.httpOptions);
  }

  Remove (request: DeleteInstituteRequest): Observable<DeleteInstituteResponse> {
      return this.http.post<DeleteInstituteResponse>(this.apiUrl + '/Delete', request, this.httpOptions);
  }

  Search_Institute(text: string): Observable<OperationStatus> {
    return this.http.post<OperationStatus>(this.apiUrl + '/Search', JSON.stringify(text), this.httpOptions);
  }
}
