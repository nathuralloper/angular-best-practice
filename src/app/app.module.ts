import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
import { CatalogModule } from './catalog/catalog.module';


@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
