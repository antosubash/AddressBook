import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GeocoadingService } from '../service/geocoder.service';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';
@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})

export class ContactFormComponent {

    constructor(private geoService: GeocoadingService, private service: PersonService, private route: ActivatedRoute,
        private router: Router) {
        this.model = new Person(0, "", "", "", "", "", "","","");
    }

    model:Person;

    success = false;

    submitted = false;

    isEdit = false;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            console.log(params);
            let id = +params['id']; // (+) converts string 'id' to a number
            if (id) {
                this.service.getPerson(id).subscribe(person => {
                    this.resetModel();
                    this.model = person;
                    this.isEdit = true;
                    this.geoService.codeAddress(person.Address);
                },
                    error => alert(error));
            }
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.model);
        if (this.isEdit) {
            this.updateContact(this.model);
        } else {
            this.saveContact(this.model);
        }
        
    }
    geoCode(address:string) {
        console.log(address);
        this.geoService.codeAddress(address);
    }

    updateContact(contact: Person) {
        if (contact.Id > 0) {
            this.service.updatePerson(contact, contact.Id)
                .subscribe(response => {
                    console.log(response);
                    this.success = true;
                });
        }
        
    }

    saveContact(contact: Person) {
        this.service.savePerson(contact)
            .subscribe(response => {
                console.log(response);
                this.resetModel();
                this.success = true;
            },
            error => alert(error));
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    resetModel() {
        this.model = new Person(0, "", "", "", "", "", "", "", "");
        this.success = false;
    }
    
    active = true;

    newPerson() {
        this.model = new Person(0, "", "", "", "", "", "", "", "");
        this.success = false;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}