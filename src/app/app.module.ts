import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableConfigService } from './components/table/table.config.service';
import { SortDirective } from './directive/sort.directive';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FormComponent,
    TableComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TableConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
