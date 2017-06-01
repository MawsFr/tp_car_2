import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'File Navigator';
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    lastOnBottom: true
  }
}