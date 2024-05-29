import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { metaReducers, rootReducer } from './state/00-reducer';
import { Effect01 } from './state/effect01';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      root: rootReducer
    }, { metaReducers,
        runtimeChecks : {
          strictActionTypeUniqueness : true,
          strictActionImmutability : true,
          strictStateImmutability : true
        }

     }),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25,
      }
    ),
    EffectsModule.forRoot([Effect01])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
