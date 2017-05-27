import { Injectable } from '@angular/core';
import { File } from './files-browser.component';
import * as FileSaver from 'file-saver'

import { Headers, Http, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FileService {
  private LIST_FILE_URL = '/api/files/list/';
  private DOWNLOAD_FILE_URL = '/api/files/download/';

  constructor(private http: Http) { }

  listFiles(path: string): Promise<File[]> {
    return this.http.get(this.LIST_FILE_URL + path)
      .toPromise()
      .then(response => (response.json() as File[]).map(function ({ name, size, isDirectory, path }) {
        return new File(name, size, isDirectory, path);
      }))
      .catch(error => this.handleError);

  }

  download(path: string, filename: string) {
    debugger;
    return this.http.get(this.DOWNLOAD_FILE_URL + path, {responseType: ResponseContentType.Blob} ).toPromise()
    .then(response => {
      debugger;
      var data = new Blob([response.blob()]);
      FileSaver.saveAs(data, filename);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('Il y\'a eu une erreur', error);
    return Promise.reject(error.message || error);
  }

}
