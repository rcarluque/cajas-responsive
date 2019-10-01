import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Language
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
// Components
import { AppComponent } from './app.component';
// Pipes
import { TransformDatePipe } from './pipes/transform-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransformDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
