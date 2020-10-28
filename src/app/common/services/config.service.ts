import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Config } from '../models/base/config';
declare const getProdConfigData: any;
declare const getDevConfigData : any;

@Injectable()
export class ConfigService {
  private config: Config;

  constructor() {
    if (environment.envName === 'prod') {
      this.config = <Config>getProdConfigData();
    } else {
      this.config = <Config>getDevConfigData();
    }
  }

  public Get(): Config {
    return this.config;
  }
}
