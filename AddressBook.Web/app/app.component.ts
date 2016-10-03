import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h3>Contacts</h3>
        <nav>
          <a routerLink="/contacts" routerLinkActive="active">contacts</a>
          <a routerLink="/create" routerLinkActive="active">Create</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
