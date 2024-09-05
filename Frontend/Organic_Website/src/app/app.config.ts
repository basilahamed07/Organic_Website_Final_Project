import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { ContectComponent } from './Main/contect/contect.component';
import { AboutComponent } from './Main/about/about.component';
import { HeaderComponent } from "./header/header.component" ;
import { FooterComponent } from "./footer/footer.component" ;
import { LandingpageComponent } from "./landingpage/landingpage.component" ;




import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()]
};
