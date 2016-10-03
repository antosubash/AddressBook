export class Person {
    Id: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Designation: string;
    Phone: string;
    Email: string;
    Job: string;
    Institution: string;

    constructor(id: number, fname: string, lname: string, address: string, dsgn: string, phone: string, email: string,job:string,institution:string) {
        this.Id = id;
        this.FirstName = fname;
        this.LastName = lname;
        this.Address = address;
        this.Designation = dsgn;
        this.Phone = phone;
        this.Email = email;
        this.Job = job;
        this.Institution = institution;
    }
}