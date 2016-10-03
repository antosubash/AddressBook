import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from "./component/contact-list.component";
import { ContactDetailsComponent } from "./component/contact-details.component";
import { ContactFormComponent } from "./component/contact-form.component";
const appRoutes: Routes = [
    { path: '', component: ContactListComponent },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contact/:id', component: ContactDetailsComponent },
    { path: 'create', component: ContactFormComponent },
    { path: 'contact/edit/:id', component: ContactFormComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);