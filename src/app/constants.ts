import { Injectable } from "@angular/core";
import { PostConfig } from "./posts/posts.component";


export interface PostGet {
    [key: string]: PostConfig
}

@Injectable({
    providedIn: 'root'
})
export class Constants {
    public readonly FIREBASE_ROOT_URL = 'https://angular-complete-f99ef-default-rtdb.asia-southeast1.firebasedatabase.app/';

    
}

