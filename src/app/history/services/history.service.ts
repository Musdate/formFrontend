import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  findAllComercial(sortBy: string, sortOrder: 'asc' | 'desc' = 'desc'): Observable<ComercialRequest[]> {
    const url = `${ this.baseUrl }/comercial-req`;
    return this.http.get<ComercialRequest[]>(`${url}?sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  findAllInternal(sortBy: string, sortOrder: 'asc' | 'desc' = 'desc'): Observable<InternalRequest[]> {
    const url = `${ this.baseUrl }/internal-req`;
    return this.http.get<InternalRequest[]>(`${url}?sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  findAllGeneric(sortBy: string, sortOrder: 'asc' | 'desc' = 'desc'): Observable<GenericRequest[]> {
    const url = `${ this.baseUrl }/generic-req`;
    return this.http.get<GenericRequest[]>(`${url}?sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  generatePDF(solicitud: ComercialRequest | InternalRequest | GenericRequest) {

    const url = `${ this.baseUrl }/pdf`;
    return this.http.post(url, solicitud, { responseType: 'blob' });

  }

}