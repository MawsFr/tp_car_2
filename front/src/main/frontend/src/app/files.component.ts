import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileService } from './file.service';

export class File {
  name: string;
  size: number;
  isDirectory: boolean;
  currentClasses: {};

  constructor (name: string, size: number, isDirectory: boolean) {
    this.name = name;
    this.size = size;
    this.isDirectory = isDirectory;
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
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  currentPath = '';
  files: File[];

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.fileService.listFiles().then(data => this.files = data);
  }

  go(directory: File) {
    if(directory.isDirectory) {

    }
  }
}
