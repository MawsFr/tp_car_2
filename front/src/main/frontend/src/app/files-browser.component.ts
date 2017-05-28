import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileService } from './file.service';
import * as $ from "jquery";

import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

export class MyFile {
  currentClasses: {};

  constructor(public name: string, public size: number, public isDirectory: boolean, public path: string) {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'fa-file': !this.isDirectory,
      'fa-folder': this.isDirectory,
    };
  }
}

@Component({
  selector: 'my-files',
  templateUrl: './files-browser.component.html',
  styleUrls: ['./files-browser.component.css']
})
export class FilesBrowserComponent implements OnInit {
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
  }

  chooseFile() {
    $('.browse').click();
  }

  newDir() {
    this.fileService.createDirectory('Nouveaudossier');
  }

  upload($event) {
    const files = $event.srcElement.files;
    this.fileService.upload(files);
  }
}
