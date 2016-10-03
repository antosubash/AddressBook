import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    routing,
    appRoutingProviders
} from './app.routes';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactListComponent } from "./component/contact-list.component";
import { ContactDetailsComponent } from "./component/contact-details.component";
import { ContactFormComponent } from "./component/contact-form.component";
import { PersonService } from './service/person.service';
import { GeocoadingService } from './service/geocoder.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule,
        ReactiveFormsModule  ],
    declarations: [AppComponent, ContactListComponent, ContactDetailsComponent, ContactFormComponent],
  providers: [
      appRoutingProviders,  PersonService, GeocoadingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
