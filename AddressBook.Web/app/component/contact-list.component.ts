import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
    selector: 'contact-list',
    templateUrl: `app/component/contact-list.html`,
})
export class ContactListComponent {

    public persons:any;
    private selectedId: number;
    constructor(
        private service: PersonService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    onSelect(person: Person) {
        this.router.navigate(['/contact/edit', person.Id]);
    }

    onDelete(person: Person) {
        this.service.deletePerson(person.Id).subscribe(
            contacts => {
                this.updateList()
            },
            error => alert(error));
    }

    updateList() {
        this.service.get().subscribe(
            contacts => {
                this.persons = contacts;
            },
            error => alert(error));
    }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.updateList()
        });
    }

    
    public contact: Person;
    public contacts: Person[];
    


    emailValidator(control: any) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    }
}

