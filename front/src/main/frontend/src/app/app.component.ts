import { Component } from '@angular/core';
import { FileService } from './file.service';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';



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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileService]
})
export class AppComponent implements OnInit {
  title = 'File Navigator';
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
}
