import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { ComercialRequest } from 'src/app/reactive/interfaces/comercial-req.interface';

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

}
