import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './features/log-in/log-in/log-in.component';
import { FaqComponent } from './features/main/faq/faq/faq.component';
import { GallaryComponent } from './features/main/gallary/gallary/gallary.component';
import { HowToComponent } from './features/main/how-to/how-to/how-to.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    FaqComponent,
    GallaryComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
