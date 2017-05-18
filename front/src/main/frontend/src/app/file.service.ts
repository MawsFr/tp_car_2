import { Injectable } from '@angular/core';
import { File } from './files.component';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FileService {
  private LIST_FILE_URL = '/api/files/list';

  constructor(private http: Http) { }

  listFiles(): Promise<File[]> {
    return this.http.get(this.LIST_FILE_URL)
      .toPromise()
      .then(response => (response.json() as File[]).map(function ({name, size, isDirectory}) {
        return new File(name, size, isDirectory);
      }))
      .catch(error => this.handleError);

  }

  processResult

  private handleError(error: any): Promise<any> {
    console.error('Il y\'a eu une erreur', error);
    return Promise.reject(error.message || error);
  }

}
