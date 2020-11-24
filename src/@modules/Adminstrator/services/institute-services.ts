import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperationStatus } from 'src/app/common/models/base/OperationStatus';
import { Config } from 'src/app/common/models/base/config';
import { ConfigService } from 'src/app/common/services/Config.Service';
import { AddInstituteResponse } from '../Messages/Response/add-institute-response';
import { UpdateInstituteResponse } from '../Messages/Response/update-institute-response';
import { GetInstituteResponse } from '../Messages/Response/get-institute-response';
import { GetAllInstituteResponse } from '../Messages/Response/get-all-institute-response';
import { DeleteInstituteResponse } from '../Messages/Response/delete-institute-response';
import { GetAllInstituteRrequest } from '../Messages/Request/get-all-institute-request';
import { AddInstituteRequest } from '../Messages/Request/add-institute-request';
import { GetInstituteRequest } from '../Messages/Request/get-institute-request';
import { UpdateInstituteRequest } from '../Messages/Request/update-institue-request';
import { DeleteInstituteRequest } from '../Messages/Request/delete-institute-request';

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
