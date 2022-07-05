import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const STANDALONE_COMPONENTS = [HomeComponent, NavigationComponent];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...STANDALONE_COMPONENTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
