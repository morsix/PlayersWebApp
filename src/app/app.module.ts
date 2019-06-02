import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsModule} from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';  

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
