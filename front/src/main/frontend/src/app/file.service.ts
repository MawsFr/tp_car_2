import { Injectable, Output, EventEmitter } from '@angular/core';
import { MyFile } from './files-browser.component';
import * as FileSaver from 'file-saver'
declare var $: any;
import { Headers, Http, ResponseContentType, RequestOptions } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import 'rxjs/add/operator/toPromise';


export class ModalConfig {
  title: string;
  text: string;
  name: string;
  file: MyFile;
  callback: any;
  fileService: FileService;
}

@Injectable()
export class FileService {
  private LIST_FILE_URL = '/api/files/list/';
  private DOWNLOAD_FILE_URL = '/api/files/download/';
  private UPLOAD_FILE_URL = '/api/files/upload/';
  private DELETE_FILE_URL = '/api/files/delete/';
  private CREATE_DIR_URL = '/api/files/createdir/';
  private MODAL_ID = '#edit-name';
  @Output() onFileUploadFinish: EventEmitter<MyFile> = new EventEmitter<any>();
  @Output() onDirectoryCreated: EventEmitter<MyFile> = new EventEmitter<any>();

  currentPath = '';
  modalConfig: ModalConfig;


  public uploader: FileUploader = new FileUploader({ url: this.UPLOAD_FILE_URL });
  constructor(private http: Http) { }

  listFiles(path: string): Promise<MyFile[]> {
    return this.http.get(this.LIST_FILE_URL + path)
      .toPromise()
      .then(response => (response.json() as MyFile[]).map(function ({ name, size, isDirectory, path }) {
        return new MyFile(name, size, isDirectory, path);
      }))
      .catch(error => this.handleError);

  }

  download(path: string, filename: string) {
    return this.http.get(this.DOWNLOAD_FILE_URL + path, { responseType: ResponseContentType.Blob }).toPromise()
      .then(response => {
        const data = new Blob([response.blob()]);
        FileSaver.saveAs(data, filename);
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('Il y\'a eu une erreur', error);
    return Promise.reject(error.message || error);
  }

  upload(files: File[]) {
    this.uploader.options.url = this.UPLOAD_FILE_URL + this.currentPath;
    this.uploader.addToQueue(files);
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (status === 200) {
        const file = JSON.parse(response) as MyFile;
        const newFile = new MyFile(file.name, file.size, file.isDirectory, file.path);
        this.onFileUploadFinish.emit(newFile);
      }
    };
  }

  createDirectory(name: string) {
    name = name || this.modalConfig.name;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.CREATE_DIR_URL + this.currentPath, { name }, options)
      .toPromise()
      .then(response => {
        const file = response.json() as MyFile;
        this.modalConfig.file.name = file.name;
        this.modalConfig.file.size = file.size;
        this.modalConfig.file.isDirectory= file.isDirectory;
        this.modalConfig.file.path = file.path;
        this.modalConfig.file.setCurrentClasses();
        this.onDirectoryCreated.emit(this.modalConfig.file);
      })
      .catch(error => this.handleError);
  }

  delete(path: string) {
    return this.http.delete(this.DELETE_FILE_URL + path)
      .toPromise()
      .catch(error => this.handleError);
  }

  openModal(config: ModalConfig) {
    debugger;
    this.modalConfig = config;
    $(this.MODAL_ID).modal('show');
  }
}
