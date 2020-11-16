import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institute } from '../models/instittue';
import { OperationStatus } from 'src/app/common/models/base/OperationStatus';
import { Config } from 'src/app/common/models/base/config';
import { ConfigService } from 'src/app/common/services/Config.Service';
import { AddInstituteResponse } from '../Messages/Response/add-institute-response';
import { UpdateInstituteResponse } from '../Messages/Response/update-institute-response';
import { GetInstituteResponse } from '../Messages/Response/get-institute-response';
import { GetAllInstituteResponse } from '../Messages/Response/get-all-institute-response';
import { DeleteInstituteResponse } from '../Messages/Response/delete-institute-response';

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
    this.apiUrl = this.config.API_Url + '/institute';
   }

  Create (entity: Institute): Observable<AddInstituteResponse> {
    return this.http.post<AddInstituteResponse>(this.apiUrl + '/Add', JSON.stringify(entity), this.httpOptions);
  }

  Update (entity: Institute): Observable<UpdateInstituteResponse> {
    return this.http.post<UpdateInstituteResponse>(this.apiUrl + '/Update', JSON.stringify(entity), this.httpOptions);
  }

  Get (id: number): Observable<GetInstituteResponse> {
    return this.http.post<GetInstituteResponse>(this.apiUrl + '/Get', JSON.stringify(id), this.httpOptions);
  }

  GetAll(request): Observable<GetAllInstituteResponse> {
    return this.http.post<GetAllInstituteResponse>(this.apiUrl + '/GetAll', JSON.stringify(request), this.httpOptions);
  }

  Remove (id: number): Observable<DeleteInstituteResponse> {
      return this.http.post<DeleteInstituteResponse>(this.apiUrl + '/Delete', JSON.stringify(id), this.httpOptions);
  }

  Search_Institute(text: string): Observable<OperationStatus> {
    return this.http.post<OperationStatus>(this.apiUrl + '/Search', JSON.stringify(text), this.httpOptions);
  }
}
