import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { MnConfiguratorModule } from '@modalnodes/mn-configurator';
import { MnDockerModule } from '@modalnodes/mn-docker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { StyleSelectorComponent } from './style-selector/style-selector.component';
import { DecimaldatePipe } from './decimaldate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StyleSelectorComponent,
    DecimaldatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MnDockerModule,
    MnConfiguratorModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
