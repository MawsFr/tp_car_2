import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FilesComponent } from './files.component';
import { FileNavigatorModule } from './filenavigator/filenavigator.module'

import { FileService } from './file.service';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileNavigatorModule,
    NgbModule.forRoot()
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
