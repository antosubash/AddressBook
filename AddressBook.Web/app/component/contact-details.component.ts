import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';
import { GeocoadingService } from '../service/geocoder.service';
@Component({
    selector: 'contact-details',
    template: `
       <div>
            Designation: {{contact.designation}}<br>
            Phone Number: {{contact.Phone}}<br>
            Address: {{contact.Address}}<br>
            Email Id: {{contact.Email}}
        </div>
        <div id="map" style="width:100%;height:500px"></div>

        <a routerLink="/" routerLinkActive="active">contacts</a>
    `,
    inputs: ["contact"]
})
export class ContactDetailsComponent {
    public contact = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: PersonService,
        private geoService: GeocoadingService
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getPerson(id).subscribe(person => {
                this.contact = person;
                this.geoService.codeAddress(person.Address);
            },
                error => alert(error));
        });
    }
}