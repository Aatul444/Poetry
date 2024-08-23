import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  constructor(private http: HttpClient) {}
  UStreamer: any = {
    isStreamerActive: false,
    data: {},
  };
  littleNav = false;
  loader:boolean=true;

}
