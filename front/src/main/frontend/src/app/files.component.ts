import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileService } from './file.service';
import { MyFile } from './files-browser.component'

import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: MyFile[];
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .forEach((event: NavigationEnd) => {
        this.parseUrl();
      });
    this.fileService.onFileUploadFinish.subscribe(file => {
      this.addFile(file);
    });

    this.fileService.onDirectoryCreated.subscribe(file => {
      this.addFile(file);
    });
  }

  parseUrl() {
    const parentRoot: ActivatedRoute = this.router.routerState.root.firstChild;
    if (parentRoot.snapshot.url.map(p => p.path).join('/') === 'files') {
      let path = '';

      // Child route is optional, in case the user has browsed to just "/browse"
      const childRoute: ActivatedRoute = parentRoot.firstChild;
      if (childRoute && childRoute.snapshot) {
        path = childRoute.snapshot.url.map(p => p.path).join('/');
        this.fileService.currentPath = path;
        this.fileService.currentPathSplit = path.split('/');
        console.log('New browser path is ', path);
      }

      this.getFiles();
    }
  }

  getFiles() {
    this.fileService.listFiles().then(files => this.files = files);
  }

  go(directory: MyFile) {
    if (directory.isDirectory) {
      this.router.navigate(['/files/' + directory.path]);
    }
  }

  download(file: MyFile) {
    this.fileService.download(file.path, file.name);
  }

  addFile(file: MyFile) {
    this.files.push(file);
    // this.files.sort();
  }

  delete(file: MyFile) {
    this.fileService.delete(file.path).then(e => {
      this.files.splice(this.files.indexOf(file), 1);
    });
  }

  rename(file: MyFile) {
    var modalConfig = {
      title: "Renommez le fichier ou le dossier",
      text: "Entrez le nom",
      file: file,
      name: '',
      fileService: this.fileService,
      callback: function() {
        this.fileService.renameDirectory();
      }
    }
    this.fileService.openModal(modalConfig);
  }

}
