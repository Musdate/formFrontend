import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { InternalRequest } from '../interfaces/internal-req.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject( HttpClient );

  constructor() { }

  onSave( body: InternalRequest ) {

    const url = `${ this.baseUrl }/internal-req`;

    return this.http.post<InternalRequest>(url, body);

  }

}
