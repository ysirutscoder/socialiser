import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '@src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Date
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
    },
    display: {
        dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};

// Services

import { NotificationModule } from './services';

// Store

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [];
import { reducers, effects } from './store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './components';
import {MaterialModule} from './shared/material/material.module';
import {DevexpressModule} from './shared/devexpress/devexpress.module';
import {WmNgComponentsModule} from './shared/lib/wm-ng-components.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

export  function  HttpLoaderFactory(http: HttpClient) {
    return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MaterialModule,
        DevexpressModule,

        AppRoutingModule,

        AngularFireModule.initializeApp(environment.firebase.config),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,

        MatNativeDateModule,

        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),

        TranslateModule.forRoot({
            loader: {
                provide:  TranslateLoader,
                useFactory:  HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        WmNgComponentsModule,

        EffectsModule.forRoot(effects),
        StoreDevtools,

        NotificationModule.forRoot()
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
