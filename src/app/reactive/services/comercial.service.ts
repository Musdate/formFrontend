import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ComercialRequest } from '../interfaces/comercial-req.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercialService {
  
  private readonly baseUrl: string = environment.baseUrl;

  private http          = inject( HttpClient );

  constructor() { }

  onSave( body: ComercialRequest ) {

    console.log('asdasdasd');

    const url = `${ this.baseUrl }/comercial-req`;

    return this.http.post<ComercialRequest>(url, body);

  }

}
