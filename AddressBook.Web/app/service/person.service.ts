import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import {
    Http, Request, RequestMethod, Response,
    RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {


    public _saveUrl: string = 'api/Person/Create/';
    public _updateUrl: string = 'api/Person/Update';
    public _getUrl: string = '/api/Person/GetAll/';
    public _getByIdUrl: string = 'api/person/GetById';
    public _deleteByIdUrl: string = 'api/Person/DeleteById/';

    constructor(private http: Http) { }

    get() {
        return this.http.get(this._getUrl).map(response => response.json());
    }

    getPerson(id: number | string) {
        return this.http.get(this._getByIdUrl + '/' + id).map(response => response.json());
    }

    //Post
    savePerson(contact: Person): Observable<string> {
        //debugger
        let body = JSON.stringify(contact);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
        return this.http.post(this._saveUrl, body, options)
            .map(res => res.json().message)
            .catch(this.handleError);
    }

    //Put
    updatePerson(contact: Person, id: number | string): Observable<any> {
        //debugger
        var updateUrl = this._updateUrl + '/' + id;
        var body = JSON.stringify(contact);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
        return this.http.post(updateUrl, body, { headers: headers });
                    
    }

    //Delete
    deletePerson(id: number | string): Observable<any> {
        //debugger
        var deleteByIdUrl = this._deleteByIdUrl + '/' + id
        var body = JSON.stringify(id);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //http.post(url: string, options ?: RequestOptionsArgs): Observable<Response>
        return this.http.post(deleteByIdUrl, body, { headers: headers });
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }
}

