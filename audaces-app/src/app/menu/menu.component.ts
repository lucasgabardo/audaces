import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  toggleTheme = false;
  menuOpened = false;

  constructor(private themeService: ThemeService) { 
    this.isDarkTheme = new Observable()
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme() {    
    this.themeService.setDarkTheme(!this.toggleTheme);
    this.toggleTheme = !this.toggleTheme;
  }

  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }
}
