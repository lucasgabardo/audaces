import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = new Observable();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
} 
