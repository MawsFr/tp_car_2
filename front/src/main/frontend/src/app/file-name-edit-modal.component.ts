import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MyFile} from './files-browser.component'
import { FileService } from "./file.service";

// #editName
@Component({
  selector: 'edit-name-modal',
  templateUrl: './file-name-edit-modal.component.html'
})

export class FileNameEditModalComponent implements OnInit {
  constructor(private fileService: FileService) {

  }

  ngOnInit(): void {
  }

  validate() {
    debugger;
    this.fileService.modalConfig.callback();
  }

}