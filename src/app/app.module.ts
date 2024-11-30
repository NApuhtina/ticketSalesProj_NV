import {APP_INITIALIZER, NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RestInterceptorsService} from './services/interceptors/rest-interceptors.service';
import {ConfigService} from './services/config/config.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptorsService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

function initializeApp(config: ConfigService) {
  //config.configLoad();
  return () => config.loadPromise().then(() => {
    console.log('---CONFIG LOADED--', ConfigService.config);
  });
}