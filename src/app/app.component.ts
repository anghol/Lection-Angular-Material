import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lesson-9';

  public isSidenavOpened: boolean = true;

  constructor(private matIconRegistry: MatIconRegistry) {}

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
  }

  public toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
