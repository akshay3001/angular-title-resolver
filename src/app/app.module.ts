import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomTitleStrategyService } from './common/custom-title-strategy.service';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const STANDALONE_COMPONENTS = [HomeComponent, NavigationComponent];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...STANDALONE_COMPONENTS,
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategyService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
