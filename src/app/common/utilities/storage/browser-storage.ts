import {Injectable} from '@angular/core';

@Injectable()
export class BrowserStorage {

  private hasStorage: boolean;

  constructor() {
    this.hasStorage = typeof Storage !== 'undefined';
  }

  public get(key: string): any {

    if (this.hasStorage) {
      return localStorage.getItem(key);
    }

    return null;
  }

  public getAll(): any {
    if (this.hasStorage) {
      const archive = localStorage;
      return archive;
    }
    return null;
  }

  public set(key: string, value: string): void {
    if (this.hasStorage) {
      localStorage.setItem(key, value);
    }
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public removeAll(): void {
    localStorage.clear();
  }

}
