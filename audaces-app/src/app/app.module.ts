import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LogoComponent } from './menu/logo/logo.component';
import { ContentComponent } from './content/content.component';
import { BannerComponent } from './content/banner/banner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SequenceTargetComponent } from './content/sequence-target/sequence-target.component';

import { ThemeService } from './core/services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoComponent,
    ContentComponent,
    BannerComponent,
    SequenceTargetComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule 
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 