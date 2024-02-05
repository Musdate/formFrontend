import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

import {
  ComercialRequest,
  InternalRequest,
  GenericRequest
} from 'src/app/reactive/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject( HttpClient );

  constructor() { }

  findAllComercial(): Observable<ComercialRequest[]> {

    const url = `${ this.baseUrl }/comercial-req`;

    return this.http.get<ComercialRequest[]>(url);

  }

  findAllInternal(): Observable<InternalRequest[]> {

    const url = `${ this.baseUrl }/internal-req`;

    return this.http.get<InternalRequest[]>(url);

  }

  findAllGeneric(): Observable<InternalRequest[]> {

    const url = `${ this.baseUrl }/generic-req`;

    return this.http.get<GenericRequest[]>(url);

  }

}