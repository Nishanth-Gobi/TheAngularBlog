
// Have to use this instead of separate onLogin, onSignup procedures

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({

    providedIn: 'root'
})

export class PostFirebaseService {

    constructor(private http: HttpClient){ }

    rootURL = '';

    
}