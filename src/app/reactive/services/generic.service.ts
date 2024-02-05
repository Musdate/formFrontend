import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { GenericRequest } from '../interfaces/generic-req.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  
  private readonly baseUrl: string = environment.baseUrl;

  private http = inject( HttpClient );

  constructor() { }

  onSave( body: GenericRequest ) {

    const url = `${ this.baseUrl }/generic-req`;

    return this.http.post<GenericRequest>(url, body);

  }

}
