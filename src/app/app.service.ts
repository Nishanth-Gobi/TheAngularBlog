
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "tailwindcss";

import { PostConfig } from "../app/posts/posts.component";

@Injectable({

    providedIn: 'root'
})
export class ApiHttpService {

    constructor(private http: HttpClient){ }

    get(url: string, options?: any){

        return this.http.get<Config>(url, options);
    }   

    post(url: string, data: any, options?: any){

        return this.http.post(url, data, options);
    }

    put(url: string, data: any, options?: any){

        return this.http.put(url, data, options);
    }

    delete(url: string, options?: any){

        return this.http.delete(url, options);
    }

    get_posts(url: string, options?: any){

        type get_config = { [key: string]: PostConfig }

        return this.http.get<get_config>(url, options);
    }

}