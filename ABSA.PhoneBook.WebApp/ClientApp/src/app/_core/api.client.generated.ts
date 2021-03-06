/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.4.0 (NJsonSchema v10.0.21.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = 'API_BASE_URL';

@Injectable()
export class Service {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param phoneBookId (optional) 
     * @return Success
     */
    getPhoneBook(phoneBookId: number | null | undefined): Observable<PhoneBook> {
        let url_ = this.baseUrl + "api/Simple/api/Simple/GetPhoneBook?";
        if (phoneBookId !== undefined)
            url_ += "phoneBookId=" + encodeURIComponent("" + phoneBookId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPhoneBook(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPhoneBook(<any>response_);
                } catch (e) {
                    return <Observable<PhoneBook>><any>_observableThrow(e);
                }
            } else
                return <Observable<PhoneBook>><any>_observableThrow(response_);
        }));
    }

    protected processGetPhoneBook(response: HttpResponseBase): Observable<PhoneBook> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PhoneBook.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PhoneBook>(<any>null);
    }

    /**
     * @return Success
     */
    getPhoneBooks(): Observable<PhoneBook[]> {
        let url_ = this.baseUrl + "api/Simple/api/Simple/GetPhoneBooks";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPhoneBooks(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPhoneBooks(<any>response_);
                } catch (e) {
                    return <Observable<PhoneBook[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<PhoneBook[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetPhoneBooks(response: HttpResponseBase): Observable<PhoneBook[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200.push(PhoneBook.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PhoneBook[]>(<any>null);
    }

    /**
     * @return Success
     */
    getEntryTypes(): Observable<Lookup[]> {
        let url_ = this.baseUrl + "api/Simple/api/Simple/GetEntryTypes";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetEntryTypes(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetEntryTypes(<any>response_);
                } catch (e) {
                    return <Observable<Lookup[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<Lookup[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetEntryTypes(response: HttpResponseBase): Observable<Lookup[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200.push(Lookup.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Lookup[]>(<any>null);
    }

    /**
     * @param viewModel (optional) 
     * @return Success
     */
    addPhoneBook(viewModel: PhoneBookViewModel | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "api/Simple/api/Simple/AddPhoneBook";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(viewModel);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddPhoneBook(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddPhoneBook(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processAddPhoneBook(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class PhoneBook implements IPhoneBook {
    phoneBookId?: number | undefined;
    name?: string | undefined;
    entries?: Entry[] | undefined;

    constructor(data?: IPhoneBook) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.phoneBookId = data["phoneBookId"];
            this.name = data["name"];
            if (Array.isArray(data["entries"])) {
                this.entries = [] as any;
                for (let item of data["entries"])
                    this.entries.push(Entry.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PhoneBook {
        data = typeof data === 'object' ? data : {};
        let result = new PhoneBook();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["phoneBookId"] = this.phoneBookId;
        data["name"] = this.name;
        if (Array.isArray(this.entries)) {
            data["entries"] = [];
            for (let item of this.entries)
                data["entries"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPhoneBook {
    phoneBookId?: number | undefined;
    name?: string | undefined;
    entries?: Entry[] | undefined;
}

export class Entry implements IEntry {
    entryId?: number | undefined;
    entryType?: EntryType | undefined;
    phoneNumber?: string | undefined;

    constructor(data?: IEntry) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.entryId = data["entryId"];
            this.entryType = data["entryType"];
            this.phoneNumber = data["phoneNumber"];
        }
    }

    static fromJS(data: any): Entry {
        data = typeof data === 'object' ? data : {};
        let result = new Entry();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["entryId"] = this.entryId;
        data["entryType"] = this.entryType;
        data["phoneNumber"] = this.phoneNumber;
        return data; 
    }
}

export interface IEntry {
    entryId?: number | undefined;
    entryType?: EntryType | undefined;
    phoneNumber?: string | undefined;
}

export class Lookup implements ILookup {
    id?: number | undefined;
    code?: string | undefined;
    name?: string | undefined;

    constructor(data?: ILookup) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.code = data["code"];
            this.name = data["name"];
        }
    }

    static fromJS(data: any): Lookup {
        data = typeof data === 'object' ? data : {};
        let result = new Lookup();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["code"] = this.code;
        data["name"] = this.name;
        return data; 
    }
}

export interface ILookup {
    id?: number | undefined;
    code?: string | undefined;
    name?: string | undefined;
}

export class PhoneBookViewModel implements IPhoneBookViewModel {
    phoneBookId?: number | undefined;
    name?: string | undefined;
    entries?: Entry[] | undefined;

    constructor(data?: IPhoneBookViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.phoneBookId = data["phoneBookId"];
            this.name = data["name"];
            if (Array.isArray(data["entries"])) {
                this.entries = [] as any;
                for (let item of data["entries"])
                    this.entries.push(Entry.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PhoneBookViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PhoneBookViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["phoneBookId"] = this.phoneBookId;
        data["name"] = this.name;
        if (Array.isArray(this.entries)) {
            data["entries"] = [];
            for (let item of this.entries)
                data["entries"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPhoneBookViewModel {
    phoneBookId?: number | undefined;
    name?: string | undefined;
    entries?: Entry[] | undefined;
}

export enum EntryType {
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}
