import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
