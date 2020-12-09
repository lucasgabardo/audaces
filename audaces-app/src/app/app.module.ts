import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 