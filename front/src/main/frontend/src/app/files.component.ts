import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileService } from './file.service';
import { File } from './files-browser.component'

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
  files: File[];
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .forEach((event: NavigationEnd) => {
          this.parseUrl();
      });
  }

  parseUrl() {
    let parentRoot: ActivatedRoute = this.router.routerState.root.firstChild;
    if (parentRoot.snapshot.url.map(p => p.path).join('/') == 'files') {
      let path: string = '';

      // Child route is optional, in case the user has browsed to just "/browse"
      let childRoute: ActivatedRoute = parentRoot.firstChild;
      if (childRoute && childRoute.snapshot) {
        path = childRoute.snapshot.url.map(p => p.path).join('/');
        console.log('New browser path is ', path);
      }

      this.getFiles(path);
    }
  }

  getFiles(path:string) {
    this.fileService.listFiles(path).then(files => this.files = files);
  }

  go(directory: File) {
    debugger;
    if (directory.isDirectory) {
      this.router.navigate(['/files/'+ directory.path]);
    }
  }

}
