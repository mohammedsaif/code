import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG_URL } from 'src/app/core/constants/app.constants';

@Injectable()
export class TableConfigService {
    configUrl = CONFIG_URL;
    constructor(private http: HttpClient) { }


    getData() {
        return this.http.get(this.configUrl);
    }
}