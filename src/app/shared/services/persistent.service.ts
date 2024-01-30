import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class PersitentService {
    set(key: string, data: unknown): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch(e) {
            console.log('Error saving to localstorage', e)
        }
    }

    get(key: string) : unknown {
        try {
            const localstorageItem = localStorage.getItem(key)
            return localstorageItem ?  JSON.parse(localstorageItem) : null
        }catch (e) {
            console.log('Error getting from localstorage', e)
            return null
        }
    }
}