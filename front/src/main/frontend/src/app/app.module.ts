import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FilesBrowserComponent } from './files-browser.component';

import { FileService } from './file.service';
import { FilesComponent } from "app/files.component";
import { FileNameEditModalComponent } from "app/file-name-edit-modal.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    FilesBrowserComponent,
    FilesComponent,
    FileNameEditModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/files',
        pathMatch: 'full',
      },
      {
        path: 'files',
        component: FilesBrowserComponent,
        children: [
          {
            path: '**',
            component: FilesComponent
          }
        ]
      }
    ])
  ],
  providers: [FileService],
  bootstrap: [AppComponent],
  entryComponents: [FileNameEditModalComponent]

})
export class AppModule { }
